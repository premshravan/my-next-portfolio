import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";

const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0">
      <Link
        href="/work"
        className="relative w-[200px] h-[200px] flex justify-center items-center bg-gradient-to-tr from-purple-500 via-pink-500 to-yellow-500 rounded-full overflow-hidden shadow-lg group"
      >
        {/* Rotating Image */}
        <div className="relative w-[180px] h-[180px] bg-black/70 opacity-25 rounded-full flex justify-center items-center animate-spin-slow ">
          <Image
            src="/rounded-text.png"
            width={121}
            height={148}
            alt="Project Preview"
            className="w-[140px] h-[140px] object-contain"
          />
        </div>
        {/* Hover Arrow Icon */}
        <HiArrowRight className="absolute text-white text-4xl transform group-hover:translate-y-7 transition-transform duration-300 ease-in-out " />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 rounded-full transition-all duration-300">
          <span className="font-bold text-lg tracking-widest uppercase text-black">View Projects</span>
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
