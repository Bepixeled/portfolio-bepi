import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import SkillCard from "./SkillCard";

function Skills() {
  const frontend = ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS"];
  const backend = ["Node.js", "Express.js", "MongoDB", "SQL"];
  const tools = ["Git", "GitHub", "VS Code", "Netlify", "Render"];
  const learning = ["Svelte", "Next.js", "Angular", "Vue.js", "Flutter"];

  const controls = useAnimation();
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      controls.start({ scale: 1.0 });
    } else {
      controls.start({ scale: 0.9 });
    }
  }, [controls, inView]);

  return (
    <div className=" text-rich_black-800 my-8 flex-col md:flex-row-reverse flex w-full justify-center items-center">
    <h2 className="text-8xl font-bold my-2 mx-4 md:mx-24 bg-gradient-to-r from-hot_magenta-300 via-oxford_blue-700 to-aquamarine text-transparent bg-clip-text">
      Skills
    </h2>
    <motion.div
      id="skills"
      ref={ref}
      animate={controls}
      initial={{ scale: 0.9 }}
      transition={{ duration: 0.8, delay: 0.4 }}
      className="p-8"
    >
      <motion.div
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        variants={{
          visible: { opacity: 1, x: 0 },
          hidden: { opacity: 0, x: -50 },
        }}
        transition={{ duration: 0.5 }}
        className="flex flex-col md:flex-row w-full lg:flex-row justify-center items-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="p-4 gap-4 flex items-center justify-center flex-grow w-full lg:flex-row flex-col"
        >
          <SkillCard title="My Frontend Skills" items={frontend} />
          <SkillCard title="My Backend Skills" items={backend} />
          <SkillCard title="Tools I love to use" items={tools} />
          <SkillCard title="What I'm learning" items={learning} />
        </motion.div>
      </motion.div>
    </motion.div>
  </div>
  );
}

export default Skills;
