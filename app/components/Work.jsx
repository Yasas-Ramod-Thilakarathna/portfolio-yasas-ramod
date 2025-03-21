import { assets, workData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Work = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="work"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        My portfolio
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My latest work
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        Welcome to my portfolio! Explore a collection of my projects showcasing
        my skills and experience.
      </motion.p>
      {/* Updated grid layout */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 my-10"
      >
        {workData.map((project, id) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={id}
            className="flex flex-col justify-between h-full border border-gray-400 rounded-lg px-6 py-6 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-orange hover:border-[#fe684d] hover:bg-lightHover dark:hover:bg-darkHover"
          >
            {/* Image Section */}
            <div className="sm:w-full">
              <Image
                src={project.bgImage}
                alt={project.title}
                width={400}
                height={200}
                className="w-full h-40 object-cover rounded-lg mb-6"
              />
            </div>

            {/* Content Section */}
            <div className="flex flex-col justify-between flex-grow">
              <div>
                <h3 className="text-lg my-4 text-grey-700 dark:text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-grey-600 leading-5 dark:text-white/80">
                  {project.description}
                </p>
                <ul className="flex flex-wrap gap-2 mt-4 mb-4">
                  {project.skills?.map((skill, skillId) => (
                    <li
                      key={skillId}
                      className="text-sm font-medium bg-gray-800 text-white rounded-full px-4 py-1"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Source Button */}
              <div className="flex justify-start sm:justify-end mt-auto">
                {project.source && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.3 }}
                    className="py-2 px-6 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full hover:bg-black duration-500 dark:bg-transparent dark:border-[0.5px] dark:hover:bg-darkHover dark:text-white/90"
                    onClick={() => window.open(project.source, "_blank")}
                  >
                    Source
                    <Image
                      src={assets.right_arrow_white}
                      alt="source"
                      width={16}
                      height={16}
                      className="w-4"
                    />
                  </motion.button>
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Work;
