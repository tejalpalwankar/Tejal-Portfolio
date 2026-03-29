"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import { slideInFromTop } from "@/lib/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";

export const AIAgentsPreview = () => {
  const router = useRouter();

  return (
    <div className="relative flex items-center justify-center min-h-screen w-full overflow-hidden">

      {/* Video — full cover, no gap */}
      <video
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
        className="absolute inset-0 w-full h-full object-cover z-0"
      >
        <source src="/videos/neural-bg.mp4" type="video/mp4" />
      </video>

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55 z-[1]" />

      {/* Cyan tint to match portfolio color scheme */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/30 via-transparent to-cyan-900/30 z-[1]" />

      {/* Seamless fade into surrounding sections */}
      <div className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-[#030014] to-transparent z-[2]" />
      <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#030014] to-transparent z-[2]" />

      {/* All content — properly centered */}
      <motion.div
        initial="hidden"
        animate="visible"
        className="relative z-[10] flex flex-col items-center text-center px-6 max-w-3xl mx-auto"
      >
        {/* Top badge */}
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9] mb-6"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">Multi-Agent Systems</h1>
        </motion.div>

        {/* Main headline */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="text-[48px] md:text-[58px] font-bold text-white leading-tight mb-4"
        >
          Intelligent{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            &
          </span>{" "}
          Autonomous.
        </motion.h2>

        {/* One-liner description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.6 }}
          className="text-gray-300 text-lg mb-8 max-w-xl leading-relaxed"
        >
          7 production-ready agents built with CrewAI, GPT-4o, and OpenAI
          Agents SDK — automating research, finance, engineering, and more.
        </motion.p>

        {/* Pulsing robot */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.45, duration: 0.6 }}
          className="relative w-[80px] h-[80px] flex items-center justify-center mb-5"
        >
          <div className="absolute w-full h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 animate-ping" />
          <div className="absolute w-[68px] h-[68px] rounded-full bg-gradient-to-r from-purple-500/30 to-cyan-500/30 animate-pulse" />
          <span className="text-4xl z-10">🤖</span>
        </motion.div>

        {/* Bouncing dots */}
        <div className="flex gap-3 mb-6">
          {[...Array(5)].map((_, i) => (
            <motion.div
              key={i}
              className="w-2 h-2 rounded-full bg-gradient-to-r from-purple-400 to-cyan-400"
              animate={{ opacity: [0.2, 1, 0.2], y: [0, -8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, delay: i * 0.2 }}
            />
          ))}
        </div>

        {/* Tech tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55 }}
          className="flex flex-wrap gap-2 justify-center mb-10"
        >
          {["CrewAI", "OpenAI Agents SDK", "GPT-4o", "Firecrawl", "Streamlit", "Gradio", "Agno"].map((tag) => (
            <span
              key={tag}
              className="px-4 py-1.5 rounded-full border border-purple-500/40 text-purple-300 text-sm bg-purple-500/10 backdrop-blur-sm"
            >
              {tag}
            </span>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          onClick={() => router.push("/ai-agents")}
          className="group relative px-10 py-4 rounded-xl font-semibold text-white text-lg overflow-hidden transition-all duration-300 hover:scale-105 button-primary"
        >
          <span className="relative z-10 flex items-center gap-3">
            Explore My AI Agents
            <span className="group-hover:translate-x-1 transition-transform duration-200">→</span>
          </span>
        </motion.button>
      </motion.div>

      {/* Bottom cursive tagline */}
      <div className="absolute bottom-[30px] z-[10] w-full text-center">
        <p className="cursive text-[18px] text-gray-400">
          Building systems that think, plan, and act autonomously.
        </p>
      </div>

    </div>
  );
};