"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";

const WHITE_BG_ICONS = ["tableu.png", "qlik.jpg", "qlik.png"];

type SkillDataProviderProps = {
  src: string;
  name: string;
  width: number;
  height: number;
  index: number;
};

export const SkillDataProvider = ({
  src,
  name,
  width,
  height,
  index,
}: SkillDataProviderProps) => {
  const { ref, inView } = useInView({ triggerOnce: true });
  const needsBlend = WHITE_BG_ICONS.includes(src);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 10 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ delay: index * 0.1 }}
      className="flex flex-col items-center gap-2 group cursor-pointer"
    >
      <div
        className="transition-transform duration-200 group-hover:scale-110"
        style={needsBlend ? { mixBlendMode: "screen" } : {}}
      >
        <Image
          src={`/skills/${src}`}
          width={Math.round(width * 1.2)}
          height={Math.round(height * 1.2)}
          alt={name}
        />
      </div>
      <span className="text-[11px] text-gray-400 group-hover:text-purple-300 transition-colors duration-200 text-center max-w-[80px] leading-tight">
        {name}
      </span>
    </motion.div>
  );
};