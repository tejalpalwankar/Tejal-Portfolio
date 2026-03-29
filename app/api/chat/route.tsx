export const runtime = "nodejs";

import OpenAI from "openai";
import { NextRequest, NextResponse } from "next/server";
import fs from "fs";
import path from "path";
import { PDFParse } from "pdf-parse";

async function extractTextFromPdf(buffer: Buffer): Promise<string> {
    const parser = new PDFParse({ data: new Uint8Array(buffer) });
    try {
        const result = await parser.getText();
        return result.text;
    } finally {
        await parser.destroy();
    }
}

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

// Read and extract text from files at startup
async function readFiles() {
    try {
      const meDir = path.join(process.cwd(), "me");
      console.log("📁 Reading from:", meDir);
  
      const summary = fs.readFileSync(
        path.join(meDir, "summary.txt"),
        "utf-8"
      );
      console.log("✅ Summary loaded:", summary.length, "chars");
  
      const resumeBuffer = fs.readFileSync(path.join(meDir, "Tejal_resume.pdf"));
      console.log("✅ Resume buffer loaded:", resumeBuffer.length, "bytes");
      const resumeText = await extractTextFromPdf(resumeBuffer);
      console.log("✅ Resume text extracted:", resumeText.length, "chars");
  
      const linkedinBuffer = fs.readFileSync(
        path.join(meDir, "Tejal_Linkedin.pdf")
      );
      console.log("✅ LinkedIn buffer loaded:", linkedinBuffer.length, "bytes");
      const linkedinText = await extractTextFromPdf(linkedinBuffer);
      console.log("✅ LinkedIn text extracted:", linkedinText.length, "chars");
  
      return { summary, resumeText, linkedinText };
    } catch (e) {
      console.error("❌ Error reading me/ files:", e);
      return { summary: "", resumeText: "", linkedinText: "" };
    }
  }

// Pushover notification
async function push(text: string) {
    try {
        await fetch("https://api.pushover.net/1/messages.json", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                token: process.env.PUSHOVER_TOKEN,
                user: process.env.PUSHOVER_USER,
                message: text,
            }),
        });
    } catch (e) {
        console.error("Pushover error:", e);
    }
}

async function record_user_details(
    email: string,
    name = "Name not provided",
    notes = "not provided"
) {
    await push(`Recording ${name} with email ${email} and notes ${notes}`);
    return { recorded: "ok" };
}

async function record_unknown_question(question: string) {
    await push(`Unknown question on portfolio: ${question}`);
    return { recorded: "ok" };
}

const tools: OpenAI.Chat.ChatCompletionTool[] = [
    {
        type: "function",
        function: {
            name: "record_user_details",
            description:
                "Use this tool to record that a user is interested in being in touch and provided an email address",
            parameters: {
                type: "object",
                properties: {
                    email: {
                        type: "string",
                        description: "The email address of this user",
                    },
                    name: {
                        type: "string",
                        description: "The user's name, if they provided it",
                    },
                    notes: {
                        type: "string",
                        description:
                            "Any additional information about the conversation worth recording",
                    },
                },
                required: ["email"],
                additionalProperties: false,
            },
        },
    },
    {
        type: "function",
        function: {
            name: "record_unknown_question",
            description:
                "Always use this tool to record any question that couldn't be answered",
            parameters: {
                type: "object",
                properties: {
                    question: {
                        type: "string",
                        description: "The question that couldn't be answered",
                    },
                },
                required: ["question"],
                additionalProperties: false,
            },
        },
    },
];

function buildSystemPrompt(
    summary: string,
    resumeText: string,
    linkedinText: string
) {
    return `You are acting as Tejal Palwankar. You are answering questions on Tejal Palwankar's website, \
particularly questions related to Tejal Palwankar's career, background, skills and experience. \
Your responsibility is to represent Tejal Palwankar for interactions on the website as faithfully as possible. \
You are given a summary of Tejal Palwankar's background, Resume and LinkedIn profile which you can use to answer questions. \
Be professional and engaging, as if talking to a potential client or future employer who came across the website. \
If you don't know the answer to any question, use your record_unknown_question tool to record the question that you couldn't answer, even if it's about something trivial or unrelated to career. \
If the user is engaging in discussion, try to steer them towards getting in touch via email; ask for their email and record it using your record_user_details tool.

## Summary:
${summary}

## Resume:
${resumeText}

## LinkedIn Profile:
${linkedinText}

With this context, please chat with the user, always staying in character as Tejal Palwankar.`;
}

export async function POST(req: NextRequest) {
    try {
        const { messages } = await req.json();

        // Read and extract PDF text
        const { summary, resumeText, linkedinText } = await readFiles();

        const systemPrompt = buildSystemPrompt(summary, resumeText, linkedinText);

        const allMessages: OpenAI.Chat.ChatCompletionMessageParam[] = [
            { role: "system", content: systemPrompt },
            ...messages,
        ];

        let done = false;
        let finalContent = "";

        while (!done) {
            const response = await openai.chat.completions.create({
                model: "gpt-4o-mini",
                messages: allMessages,
                tools,
                max_tokens: 400,
                temperature: 0.7,
            });

            const choice = response.choices[0];

            if (choice.finish_reason === "tool_calls" && choice.message.tool_calls) {
                allMessages.push(choice.message);

                for (const toolCall of choice.message.tool_calls) {
                    if (toolCall.type !== "function") continue;
                    const toolName = toolCall.function.name;
                    const args = JSON.parse(toolCall.function.arguments);

                    let result = {};
                    if (toolName === "record_user_details") {
                        result = await record_user_details(
                            args.email,
                            args.name,
                            args.notes
                        );
                    } else if (toolName === "record_unknown_question") {
                        result = await record_unknown_question(args.question);
                    }

                    allMessages.push({
                        role: "tool",
                        content: JSON.stringify(result),
                        tool_call_id: toolCall.id,
                    });
                }
            } else {
                finalContent = choice.message.content || "";
                done = true;
            }
        }

        return NextResponse.json({ message: finalContent });
    } catch (error) {
        console.error("Chat API error:", error);
        return NextResponse.json(
            { error: "Failed to get response" },
            { status: 500 }
        );
    }
}