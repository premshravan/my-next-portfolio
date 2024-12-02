// components

import ServiceSlider from "../../components/ServiceSlider";

import Bulb from "../../components/Bulb";

import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Services = () => {
  return (
    <div className="h-full bg-primary/30 py-36 flex items-center">
      <Circles />
      <div className="container mx-auto">
        <div className="flex flex-col mt-12 gap-x-8">
          {/* text */}
          <div className="text-center flex xl:w-[50vw] flex-col lg:text-left mb-4 xl:mb-0 ">
            <motion.h2
              variants={fadeIn("left", 0.3)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="h2 mt-16 text-center"
            >
              My Services <span className="text-accent">.</span>
            </motion.h2>
            <p className="mb-4 mx-w-[400px] mx-auto lg:mx-0 text-justify ">
            &quot;I specialize in crafting responsive websites, intuitive UI/UX designs, and tailored digital solutions that seamlessly blend creativity and technology. From web development using modern frameworks like React and Next.js to optimizing and maintaining digital products for speed and security, I am dedicated to transforming ideas into impactful, user-centered experiences.&quot;
            </p>
          </div>

          {/* slider */}
          <motion.div 
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full xl:max-w-[75%]">
            <ServiceSlider />
          </motion.div>
        </div>
      </div>
      <Bulb />
    </div>
  );
};

export default Services;
