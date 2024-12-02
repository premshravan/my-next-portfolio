import React, { useState } from "react";

// icons
import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiFramer,
  SiAdobexd,
  SiAdobephotoshop,
} from "react-icons/si";

//  data
const aboutData = [
  {
    title: "skills",
    info: [
      {
        title: "FrontEnd Development",
        icons: [
          <FaHtml5 />,
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "BackEnd Development",
        icons: [
          <FaCss3 />,
          <FaJs />,
          <FaReact />,
          <SiNextdotjs />,
          <SiFramer />,
          <FaWordpress />,
        ],
      },
      {
        title: "UI/UX Design",
        icons: [<FaFigma />, <SiAdobexd />, <SiAdobephotoshop />],
      },
    ],
  },
  {
    title: "awards",
    info: [
      // {
      //   title: "Webby Awards - Honoree",
      //   stage: "2011 - 2012",
      // },
      // {
      //   title: "Adobe Design Achievement Awards - Finalist",
      //   stage: "2009 - 2010",
      // },
    ],
  },
  {
    title: "experience",
    info: [
      {
        title: "Junior FrontEnd Trainee",
        stage: "2024 May - 2024 October",
      },
    ],
  },
  {
    title: "Certifications",
    info: [
      {
        title: "Master JavaScript Complete Beginner to Advanced",
        stage: "GFG",
      },
      {
        title: "React JS Course Online - React JS Certification Course.",
        stage: "GFG",
      },
      {
        title: "MERN Stack E-commerce Project",
        stage: "UDEMY",
      },
    ],
  },
];

// components
import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

// framer motion
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

// counter
import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="h-full py-32 bg-primary/20 text-center xl:text-left">
      <Circles />

      {/* avatar img*/}

      {/* <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        animate="show"
        exit={"hidden"}
        className="hidden xl:flex absolute bottom-0 -left-[370px]"
      >
        <Avatar />
      </motion.div>
       */}
      <div className="container mx-auto h-full flex flex-col items-center xl:flex-row gap-x-6">
        {/* Text */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="h2">
            "Turning Code into"{" "}
            <span className="text-accent">Possibilities.</span>
          </h2>
          <p className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0 text-justify">
            With an MBA in Finance and a passion for technology, I am on a
            journey to transition into the dynamic world of software
            development. Currently immersed in self-learning, I am honing my
            skills to become a proficient MERN stack developer.
          </p>

          {/* counters */}
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            animate="show"
            exit={"hidden"}
            className=" md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8 "
          >
            <div className="flex flex-1 xl:gap-x-6 md:gap-x-6 gap-4">
              {/* experience */}
              <div className="relative flex-1 after:w-[2px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={6} duration={5} />+
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.5] max-w-[100px]">
                  Months of Experience
                </div>
              </div>

              {/* Clients */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={1} end={1} duration={0} />+
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.5] max-w-[100px]">
                  Satisfied Customers
                </div>
              </div>

              {/* Projects */}
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-1">
                  <CountUp start={0} end={5} duration={5} />+
                </div>
                <div className="text-sm uppercase tracking-[1px] leading-[1.5] max-w-[100px]">
                  Projects Finished
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Info */}
        <motion.div
          variants={fadeIn("right", 0.4)}
          initial="hidden"
          animate="show"
          exit={"hidden"}
          className="flex flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  } cursor-pointer capitalize xl:text-lg relative after:w-6 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  <div className="hidden md:flex">-</div>
                  <div>{item.stage}</div>
                  <div className="flex gap-x-4">
                    {/* icons */}
                    {item.icons?.map((icon, iconIndex) => {
                      return <div key={iconIndex} className="text-2xl text-white">{icon}</div>;
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
