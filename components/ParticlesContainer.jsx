import { color, distance } from "framer-motion";
import React, { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

const ParticlesContainer = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  const particlesLoaded = useCallback(async () => {}, []);

  return (
    <Particles
      className="w-full h-full absolute translate-z-0"
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        fullScreen: { enable: false },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 80,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 190,
            },
            repulse: {
              distance: 100,
              duration: 4,
            },
          },
        },
        particles: {
          color: {
            value: ["#ff65a3", "#f0f4c3", "#6a0572"],
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 2,
          },
          collisions: {
            enable: true,
          },
          move: {
            directions: "none",
            enable: true,
            random: true,
            speed: 1.5, // Slightly faster
            straight: false,
            outModes: {
              default: "out", // Allow particles to exit boundaries
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: ["circle", "triangle", "polygon", "star"],
          },
          size: {
            value: {
              min: 1,
              max: 5,
            },
          },
          detectRetina: true,
        },
      }}
    />
  );
};

export default ParticlesContainer;
