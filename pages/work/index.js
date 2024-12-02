// components

import WorkSlider from "../../components/WorkSlider";

import Bulb from "../../components/Bulb";

import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Work = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 mt-20 xl:mb-0">
            <motion.h2
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 xl:mt-6"
            >
              My Works <span className="text-accent">.</span>
            </motion.h2>
            <p className="mb-4 mx-w-[400px] mx-auto lg:mx-0 ">
              "My portfolio showcases a collection of dynamic and responsive web
              applications built using modern frameworks like Next.js, React,JS,
              and Tailwind CSS. My work reflects a passion for
              crafting user-friendly and innovative digital experiences."
            </p>
          </div>

          {/* slider */}
          <motion.div
            variants={fadeIn("down", 0.5)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="w-full xl:max-w-[75%]"
          >
            <WorkSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Work;
