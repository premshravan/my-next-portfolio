// links
import Link from "next/link";

// icons
import {
  RiInstagramLine,
  RiFacebookLine,
  RiLinkedinBoxFill,
  RiGithubFill,
} from "react-icons/ri";
import React from "react";

const Socials = () => {
  return (
    <div className="flex items-center gap-x-5 text-2xl ">
      <Link
        href={"https://www.linkedin.com/in/premshravan/"}
        className="hover:text-accent transition-all duration-300"
      >
        <RiLinkedinBoxFill />
      </Link>
      <Link href={"https://github.com/premshravan"} className="hover:text-accent transition-all duration-300">
        <RiGithubFill />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiInstagramLine />
      </Link>
      <Link href={""} className="hover:text-accent transition-all duration-300">
        <RiFacebookLine />
      </Link>
     
    </div>
  );
};

export default Socials;
