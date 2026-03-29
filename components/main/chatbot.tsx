/* eslint-disable react/no-unescaped-entities */
"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Message = {
    role: "user" | "assistant";
    content: string;
};

export const Chatbot = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [messages, setMessages] = useState<Message[]>([
        {
            role: "assistant",
            content:
                "Hi! I'm Tejal's AI assistant 👋 Ask me anything about her experience, projects, or skills!",
        },
    ]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const messagesEndRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    }, [messages]);

    useEffect(() => {
        setMounted(true);
        setIsOpen(true);
    }, []);

    const sendMessage = async () => {
        if (!input.trim() || isLoading) return;

        const userMessage: Message = { role: "user", content: input };
        setMessages((prev) => [...prev, userMessage]);
        setInput("");
        setIsLoading(true);

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            });

            const data = await response.json();
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: data.message },
            ]);
        } catch {
            setMessages((prev) => [
                ...prev,
                {
                    role: "assistant",
                    content: "Sorry, something went wrong. Please try again!",
                },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyDown = (e: React.KeyboardEvent) => {
        if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    const suggestedQuestions = [
        "What does Tejal specialize in?",
        "Tell me about her AI projects",
        "Where has she worked?",
        "What are her technical skills?",
    ];

    if (!mounted) return null;

    return (
        <>
            {/* Floating button — bigger and more visible */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-[999] w-20 h-20 rounded-full bg-gradient-to-r from-purple-600 to-cyan-600 flex flex-col items-center justify-center shadow-xl shadow-purple-500/40 hover:scale-110 transition-transform duration-200 border-2 border-purple-400/50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                animate={{
                    boxShadow: isOpen
                        ? "0 0 30px rgba(139,92,246,0.5)"
                        : [
                            "0 0 20px rgba(139,92,246,0.3)",
                            "0 0 40px rgba(139,92,246,0.6)",
                            "0 0 20px rgba(139,92,246,0.3)",
                        ],
                }}
                transition={{ duration: 2, repeat: isOpen ? 0 : Infinity }}
            >
                {isOpen ? (
                    <span className="text-white text-2xl font-bold">✕</span>
                ) : (
                    <>
                        <span className="text-3xl">🤖</span>
                        <span className="text-white text-[10px] font-semibold mt-0.5">
                            Ask me!
                        </span>
                    </>
                )}
            </motion.button>

            {/* Chat window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-32 right-6 z-[999] w-[370px] h-[520px] bg-[#0d0d1a] border border-[#2A0E61] rounded-2xl shadow-2xl shadow-purple-500/20 flex flex-col overflow-hidden"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-purple-900/80 to-cyan-900/80 px-4 py-3 flex items-center justify-between border-b border-purple-500/20">
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 flex items-center justify-center text-lg">
                                    🤖
                                </div>
                                <div>
                                    <p className="text-white font-semibold text-sm">
                                        AI Assistant of Tejal                                   </p>
                                    <p className="text-green-400 text-xs flex items-center gap-1">
                                        <span className="w-1.5 h-1.5 bg-green-400 rounded-full inline-block animate-pulse" />
                                        Ask me anything!
                                    </p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-gray-400 hover:text-white transition text-lg"
                            >
                                ✕
                            </button>
                        </div>

                        {/* Messages */}
                        <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3 scrollbar-hidden">
                            {messages.map((msg, i) => (
                                <div
                                    key={i}
                                    className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}
                                >
                                    <div
                                        className={`max-w-[80%] px-3 py-2 rounded-xl text-sm leading-relaxed ${msg.role === "user"
                                                ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white rounded-br-none"
                                                : "bg-[#1a0a3a] text-gray-200 border border-purple-500/20 rounded-bl-none"
                                            }`}
                                    >
                                        {msg.content}
                                    </div>
                                </div>
                            ))}

                            {isLoading && (
                                <div className="flex justify-start">
                                    <div className="bg-[#1a0a3a] border border-purple-500/20 rounded-xl rounded-bl-none px-4 py-3">
                                        <div className="flex gap-1">
                                            {[0, 1, 2].map((i) => (
                                                <motion.div
                                                    key={i}
                                                    className="w-2 h-2 bg-purple-400 rounded-full"
                                                    animate={{ y: [0, -6, 0] }}
                                                    transition={{
                                                        duration: 0.6,
                                                        repeat: Infinity,
                                                        delay: i * 0.2,
                                                    }}
                                                />
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            )}

                            {/* Suggested questions */}
                            {messages.length === 1 && (
                                <div className="flex flex-col gap-2 mt-2">
                                    <p className="text-gray-500 text-xs text-center">
                                        Try asking:
                                    </p>
                                    {suggestedQuestions.map((q) => (
                                        <button
                                            key={q}
                                            onClick={() => {
                                                setInput(q);
                                                setTimeout(sendMessage, 100);
                                            }}
                                            className="text-left text-xs text-purple-300 border border-purple-500/30 rounded-lg px-3 py-2 hover:bg-purple-500/10 transition"
                                        >
                                            {q}
                                        </button>
                                    ))}
                                </div>
                            )}

                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input */}
                        <div className="p-3 border-t border-purple-500/20 flex gap-2">
                            <input
                                type="text"
                                value={input}
                                onChange={(e) => setInput(e.target.value)}
                                onKeyDown={handleKeyDown}
                                placeholder="Ask about Tejal..."
                                className="flex-1 bg-[#1a0a3a] border border-purple-500/30 rounded-xl px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-purple-500 transition"
                            />
                            <button
                                onClick={sendMessage}
                                disabled={isLoading || !input.trim()}
                                className="w-10 h-10 rounded-xl bg-gradient-to-r from-purple-600 to-cyan-600 flex items-center justify-center disabled:opacity-50 hover:scale-105 transition-transform"
                            >
                                <span className="text-white text-sm font-bold">→</span>
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};