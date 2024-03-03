import React from "react";
import * as Unicons from "@iconscout/react-unicons";
import { motion } from "framer-motion";

function About() {
  const listItems = [
    "Creative",
    "Curious",
    "Learner",
    "Empathetic",
    "Resilient",
    "Adaptable",
    "Problem Solver",
    "Authentic",
  ];

  const aboutItems = [
    {
      id: 1,
      content: (
        <motion.div
          initial={{ x: -1000 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-around">
            <div className="flex flex-col">
              <h2 className="text-6xl font-bold mb-12 bg-gradient-to-r from-hot_magenta-300 via-oxford_blue-700 to-aquamarine pb-4 text-transparent bg-clip-text">Who is<br /> Bepixeled?</h2>
              {listItems.map((item, index) => (
                <div key={index} className="flex items-center">
                  <div className="pr-2">
                    <Unicons.UilStar />
                  </div>
                  <p>{item}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-rich_black-300 rounded-xl md:w-1/2">
              <p className="my-2">
                At 41, I am at a crucial point in my professional journey as a
                single parent. My heart beats for the world of web development
                and I put my energy and dedication into making this dream come
                true. I am currently undergoing further training to become a web
                developer, and my fascination for this area is particularly
                reflected in my preference for React and Tailwind CSS.{" "}
              </p>

              <p className="my-2">
                Designing interactive user interfaces using React has become one
                of my greatest strengths. The opportunity to create dynamic and
                modern web applications always excites me. Tailwind CSS allows
                me to execute my designs with efficiency and precision, and I
                value the flexibility it offers me.{" "}
              </p>

              <p className="my-2">
                My journey into the world of backend development took me to
                Node.js and MongoDB. The idea of ​​developing server-side
                applications with Node.js excites me, while the
                database-supported way of working with MongoDB opens up exciting
                prospects for my future projects. The learning-intensive process
                that these technologies bring with them continues to encourage
                me to deepen and continually expand my knowledge.{" "}
              </p>

              <p className="my-2">
                As a single parent, I know that challenges provide the best
                opportunities for personal growth. I also successfully use the
                discipline and organizational skills that I developed in
                everyday life as a single parent in my further education and in
                web development.
              </p>
            </div>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div
      id="about"
      className="p-8 text-rich_black-800 my-8 flex-col flex md:flex-row"
    >
      <div className="flex flex-col lg:flex-row justify-around items-center ">
        {aboutItems.map((item) => (
          <div key={item.id} className="flex justify-center items-center">
            {item.content}
          </div>
        ))}
      </div>
    </div>
  );
}

export default About;
