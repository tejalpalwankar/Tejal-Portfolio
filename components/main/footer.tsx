import Link from "next/link";
import { RxGithubLogo, RxLinkedinLogo } from "react-icons/rx";

export const Footer = () => {
  return (
    <div className="w-full bg-transparent text-gray-200 border-t border-[#2A0E61]/50 mt-10">
      <div className="max-w-6xl mx-auto px-10 py-12 flex flex-col items-center gap-8">

        {/* Name + tagline */}
        <div className="flex flex-col items-center gap-2 text-center">
          <h3 className="text-xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
            Tejal Palwankar
          </h3>
          <p className="text-gray-400 text-sm">
            AI Engineer · Business Analyst · Data Professional
          </p>
        </div>

        {/* Links row */}
        <div className="flex flex-row gap-10 flex-wrap justify-center">
          <div className="flex flex-col items-center gap-3">
            <h4 className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              Connect
            </h4>
            <Link
              href="https://www.linkedin.com/in/tejal-palwankar/"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition text-sm"
            >
              <RxLinkedinLogo className="h-4 w-4" />
              LinkedIn
            </Link>
            <Link
              href="https://github.com/tejalpalwankar"
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition text-sm"
            >
              <RxGithubLogo className="h-4 w-4" />
              GitHub
            </Link>
          </div>

          <div className="flex flex-col items-center gap-3">
            <h4 className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              Navigation
            </h4>
            {[
              { name: "About Me", link: "/#about-me" },
              { name: "Experience", link: "/#experience" },
              { name: "Skills", link: "/#skills" },
              { name: "Projects", link: "/#projects" },
              { name: "AI Agents", link: "/ai-agents" },
            ].map((item) => (
              <Link
                key={item.name}
                href={item.link}
                className="text-gray-300 hover:text-purple-400 transition text-sm"
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col items-center gap-3">
            <h4 className="text-purple-400 text-xs font-semibold uppercase tracking-widest">
              Contact
            </h4>
            <Link
              href="mailto:tejal30palwankar@gmail.com"
              className="text-gray-300 hover:text-purple-400 transition text-sm"
            >
              tpalwank@syr.edu
            </Link>
            <span className="text-gray-500 text-sm">Portland, OR</span>
            <Link
              href="#"
              className="text-gray-300 hover:text-purple-400 transition text-sm"
            >
              Resume ↗
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/30 to-transparent" />

        {/* Copyright */}
        <p className="text-gray-500 text-xs text-center">
          © {new Date().getFullYear()} Tejal Palwankar. Built with Next.js & Three.js.
        </p>

      </div>
    </div>
  );
};