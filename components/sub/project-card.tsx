import Image from "next/image";
import Link from "next/link";

type ProjectCardProps = {
  src: string;
  title: string;
  description: string;
  link: string;
};

export const ProjectCard = ({
  src,
  title,
  description,
  link,
}: ProjectCardProps) => {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noreferrer noopener"
      className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] hover:border-purple-500 transition-all duration-300 hover:scale-[1.02] flex flex-col"
    >
      <div className="relative w-full h-[160px] overflow-hidden bg-[#0d0d1a]">
        <Image
          src={src}
          alt={title}
          fill
          className="object-contain p-4"
        />
      </div>

      <div className="relative p-4 flex flex-col gap-2 flex-1 bg-[#0d0d1a]/80">
        <h1 className="text-lg font-semibold text-white leading-tight">{title}</h1>
        <p className="text-sm text-gray-400 leading-relaxed">{description}</p>
      </div>
    </Link>
  );
};