//next image
import Image from "next/image";

//next link
import Link from "next/link";

// components
import Socials from "./Socials";

const Header = () => {
  return (
    <header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px] ">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-y-2 py-8">
          {/* logo */}
          <Link href={"/"}>
            <h1 className="xl:text-5xl  lg:text-4xl md:text-3xl text-lg "> Prem Shravan</h1>
          </Link>

          {/* socials */}
          <Socials />
          
        </div>
      </div>
    </header>
  );
};

export default Header;

