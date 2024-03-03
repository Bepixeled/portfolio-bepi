import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  const words = ["A Web Developer", "Creative", "Open Minded", "Passionate"];

  const items = [
    {
      id: 1,
      content: (
        <motion.img
          src="avatar.png"
          alt="Picture"
          className="lg:w-full w-2/3 rounded-full m-8 lg:rounded-none lg:m-0"
          initial={{ x: -500, scale: 1 }}
          animate={{ x: 0, scale: 1 }}
          transition={{ type: "spring", stiffness: 20 }}
        />
      ),
    },
    {
      id: 2,
      content: (
        <motion.div
          initial={{ x: 500 }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 20 }}
        >
          <div className="text-center lg:text-right mb-8">
            <h1 className="text-3xl lg:text-6xl font-bold">
              Hi! I'm Bepixeled
            </h1>
            <h2 className="text-4xl font-bold mt-8">I am</h2>
            <h2 className="lg:text-6xl text-4xl font-bold bg-gradient-to-r from-oxford_blue-700 via-hot_magenta-700 to-aquamarine-400 text-transparent bg-clip-text">
              {" "}
              <TypeAnimation
                sequence={[
                  "Creative",
                  3000,
                  "Open Minded",
                  3000,
                  "Passionate",
                  3000,
                  "Curious",
                  3000,
                ]}
                repeat={Infinity}
                cursor={true}
              />
            </h2>
          </div>
        </motion.div>
      ),
    },
  ];

  return (
    <div className="w-full h-auto bg-gradient-to-b from-hot_magenta-100 to-rich_black-100 px-4 text-white">
      <div className="flex flex-col">
        <div className="flex flex-col lg:flex-row justify-around items-center ">
          {items.map((item) => (
            <div key={item.id} className="flex justify-center items-center">
              {item.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Hero;
