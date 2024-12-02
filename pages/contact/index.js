import { useState } from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";
import { BsArrowRight } from "react-icons/bs";

export default function Contact() {
  const [status, setStatus] = useState(null); // To track form submission status

  async function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "5fd2ea07-a2d5-4aab-a864-9a91ee710cd4");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await response.json();
      if (result.success) {
        setStatus("success");
        event.target.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      setStatus("error");
      console.error("Form submission error:", error);
    }
  }

  return (
    <div className="h-full bg-primary/30">
      <div className="container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full">
        <div className="flex flex-col w-full max-w-[700px] ">
          <motion.h2
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 text-center mb-12"
          >
            Let's <span className="text-accent">Connect.</span>
          </motion.h2>
          <motion.form
            onSubmit={handleSubmit}
            variants={fadeIn("up", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex flex-1 flex-col gap-6 w-full mx-auto"
          >
            <div className="flex gap-x-6 w-full">
              <input type="text" placeholder="name" className="input" name="name" required />
              <input type="email" placeholder="email" className="input" name="email" required />
            </div>
            <input type="text" placeholder="subject" className="input" name="subject" required />
            <textarea
              placeholder="message"
              className="textarea"
              name="message"
              required
            ></textarea>
            <button
              type="submit"
              className="btn transition-all duration-300 flex items-center justify-center overflow-hidden group  gap-3"
            >
              <span className="group-hover:scale-110 rounded-md border p-1 hover:border-accent hover:bg-lime-500/80">Hit It...!!!</span>
              <BsArrowRight />
            </button>
          </motion.form>
          {status === "success" && <p className="text-green-500 mt-4">Message sent successfully!</p>}
          {status === "error" && <p className="text-red-500 mt-4">Something went wrong. Please try again.</p>}
        </div>
      </div>
    </div>
  );
}
