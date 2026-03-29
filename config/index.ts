import type { Metadata } from "next";

export const siteConfig: Metadata = {
  title: "Tejal Palwankar | AI Engineer & Data Professional",
  description:
    "Portfolio of Tejal Palwankar — AI Engineer specializing in agentic AI systems, RAG pipelines, and data analytics. Built multi-agent workflows with CrewAI, OpenAI Agents SDK, and GPT-4o.",
  keywords: [
    "Tejal Palwankar",
    "AI Engineer",
    "Business Analyst",
    "Data Analyst",
    "Agentic AI",
    "Multi-Agent Systems",
    "CrewAI",
    "OpenAI",
    "GPT-4o",
    "RAG",
    "LangGraph",
    "MCP",
    "Streamlit",
    "Power BI",
    "Tableau",
    "Databricks",
    "Snowflake",
    "AWS",
    "Azure",
    "GCP",
    "Python",
    "SQL",
    "portfolio",
    "nextjs",
    "space-portfolio",
  ] as Array<string>,
  authors: {
    name: "Tejal Palwankar",
    url: "https://github.com/tejalpalwankar",
  },
  openGraph: {
    title: "Tejal Palwankar | AI Engineer & Data Professional",
    description:
      "AI Engineer specializing in agentic AI systems, RAG pipelines, multi-agent workflows, and data analytics.",
    url: "https://tejalpalwankar.com",
    siteName: "Tejal Palwankar Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tejal Palwankar | AI Engineer & Data Professional",
    description:
      "AI Engineer specializing in agentic AI systems, RAG pipelines, and data analytics.",
  },
} as const;