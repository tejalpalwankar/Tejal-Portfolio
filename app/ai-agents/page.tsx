"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { SparklesIcon } from "@heroicons/react/24/solid";

const AI_AGENTS = [
  {
    title: "SignalForge",
    description:
      "A multi-agent market intelligence engine that synthesizes public web signals into structured GTM insights. Deploys specialized agents for positioning, sentiment, and performance analysis.",
    tech: ["GPT-4o", "Firecrawl", "Streamlit", "Agno"],
    icon: "🔍",
    link: "https://github.com/tejalpalwankar/signalforge",
    color: "from-purple-500 to-pink-500",
  },
  {
    title: "Deep Research Agent",
    description:
      "End-to-end research automation system. Clarifies intent, plans strategy, performs parallel web searches, synthesizes a structured report, and optionally emails results via SendGrid.",
    tech: ["OpenAI Agents SDK", "Gradio", "AsyncIO", "SendGrid"],
    icon: "🧠",
    link: "https://github.com/tejalpalwankar/deep_research_agent",
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Engineering Team Agent",
    description:
      "Multi-agent system simulating a full engineering team. An Engineering Lead, Backend Engineer, Frontend Engineer, and Test Engineer collaborate to build a stock trading platform.",
    tech: ["CrewAI", "Gradio", "Python", "Pydantic"],
    icon: "⚙️",
    link: "https://github.com/tejalpalwankar/Engineering-team-agent-CrewAI",
    color: "from-blue-500 to-indigo-500",
  },
  {
    title: "Financial Researcher Agent",
    description:
      "AI-powered financial research agent that gathers, analyzes, and synthesizes financial data to support investment decisions and market analysis workflows.",
    tech: ["CrewAI", "Python", "OpenAI"],
    icon: "📈",
    link: "https://github.com/tejalpalwankar/financial_researcher_agent_CrewAI",
    color: "from-indigo-500 to-purple-500",
  },
  {
    title: "Stock Picker Agent",
    description:
      "Intelligent stock selection agent that evaluates market signals, financial metrics, and trends to identify high-potential investment opportunities autonomously.",
    tech: ["CrewAI", "Python", "OpenAI"],
    icon: "📊",
    link: "https://github.com/tejalpalwankar/stock-picker-agent-CrewAI",
    color: "from-purple-500 to-cyan-500",
  },
  {
    title: "Debate Agent",
    description:
      "Multi-agent debate system where specialized agents argue opposing sides of a topic, evaluate arguments, and produce a structured summary of the debate outcome.",
    tech: ["CrewAI", "Python", "OpenAI"],
    icon: "🗣️",
    link: "https://github.com/tejalpalwankar/debate-agent-CrewAI",
    color: "from-pink-500 to-rose-500",
  },
  {
    title: "Coder Agent",
    description:
      "AI coding assistant agent that understands requirements, writes clean code, and iterates based on feedback — automating software development tasks end to end.",
    tech: ["CrewAI", "Python", "OpenAI"],
    icon: "💻",
    link: "https://github.com/tejalpalwankar/coder-agent-CrewAI",
    color: "from-green-500 to-cyan-500",
  },
];

export default function AIAgentsPage() {
  return (
    <main className="relative min-h-screen w-full bg-[#030014] pb-20 overflow-hidden">

      {/* Subtle neural bg video */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover opacity-10 z-0"
      >
        <source src="/videos/neural-bg.mp4" type="video/mp4" />
      </video>

      {/* Glowing orbs */}
      <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl z-0" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl z-0" />

      {/* ═══════════════════════════════════════
          HERO — Robot video + headline
      ═══════════════════════════════════════ */}
      <div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">

        {/* Robot video — mix-blend-screen removes black bg */}
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          style={{ mixBlendMode: "screen" }}
        >
          <source src="/videos/robot.mp4" type="video/mp4" />
        </video>

        {/* Fade bottom edge into page */}
        <div className="absolute bottom-0 left-0 w-full h-48 bg-gradient-to-t from-[#030014] to-transparent z-[3]" />
        {/* Fade top edge */}
        <div className="absolute top-0 left-0 w-full h-24 bg-gradient-to-b from-[#030014] to-transparent z-[3]" />

        {/* Hero text overlay */}
        <div className="relative z-[4] flex flex-col items-center text-center px-6 mt-16">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6"
          >
            <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
            <h1 className="Welcome-text text-[13px]">Multi-Agent Systems</h1>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-[52px] md:text-[64px] font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 mb-4 leading-tight"
          >
            AI Agent Projects
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
            className="text-gray-300 text-lg max-w-2xl leading-relaxed"
          >
            7 production-ready agentic systems built with CrewAI, OpenAI
            Agents SDK, and GPT-4o — automating research, finance,
            engineering, and more.
          </motion.p>
        </div>
      </div>

      {/* ═══════════════════════════════════════
          CARDS SECTION
      ═══════════════════════════════════════ */}
      <div className="relative z-10 px-10 pb-20">

        {/* Back button */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-purple-400 hover:text-purple-300 transition mb-12 group"
        >
          <span className="group-hover:-translate-x-1 transition-transform duration-200">←</span>
          Back to Portfolio
        </Link>

        {/* Agent Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {AI_AGENTS.map((agent, index) => (
            <motion.div
              key={agent.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Link
                href={agent.link}
                target="_blank"
                rel="noreferrer noopener"
                className="group flex flex-col h-full bg-[#0d0d1a]/80 backdrop-blur-sm border border-[#2A0E61] hover:border-purple-500 rounded-2xl p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-lg hover:shadow-purple-500/10"
              >
                {/* Icon + gradient bar */}
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${agent.color} flex items-center justify-center text-2xl shadow-lg`}>
                    {agent.icon}
                  </div>
                  <div className={`h-1 flex-1 rounded-full bg-gradient-to-r ${agent.color} opacity-60`} />
                </div>

                {/* Title */}
                <h2 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {agent.title}
                </h2>

                {/* Description */}
                <p className="text-gray-400 text-sm leading-relaxed flex-1 mb-4">
                  {agent.description}
                </p>

                {/* Tech tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {agent.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 rounded-full text-xs border border-purple-500/30 text-purple-300 bg-purple-500/10"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* View on GitHub */}
                <div className="mt-4 text-xs text-gray-500 group-hover:text-purple-400 transition-colors flex items-center gap-1">
                  View on GitHub
                  <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
  );
}