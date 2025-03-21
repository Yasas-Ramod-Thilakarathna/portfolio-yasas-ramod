import { assets, serviceData } from "@/assets/assets";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      id="services"
      className="w-full px-[12%] py-10 scroll-mt-20"
    >
      <motion.h4
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-center mb-2 text-lg font-Ovo"
      >
        What I Do
      </motion.h4>
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="text-center text-5xl font-Ovo"
      >
        My technical skills
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.7 }}
        className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo"
      >
        I specialize in following areas. Here’s what I bring to the table.
      </motion.p>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="grid grid-cols-auto gap-6 my-10"
      >
        {serviceData.map(({ icon, title, technologies }, index) => (
          <motion.div
            whileHover={{ scale: 1.05 }}
            key={index}
            className="border border-gray-400 rounded-lg px-8 py-12 cursor-pointer hover:-translate-y-1 duration-500 hover:shadow-orange hover:border-[#fe684d] hover:bg-lightHover dark:hover:bg-darkHover"
          >
            <Image src={icon} alt={title} className="w-10" />
            <h3 className="text-lg my-4 text-grey-700 dark:text-white">
              {title}
            </h3>
            {technologies && (
              <div className="mt-4">
                {technologies.map((techGroup, groupIndex) => (
                  <div key={groupIndex} className="mb-4">
                    <h4 className="text-sm font-semibold text-grey-700 dark:text-white/80">
                      {techGroup.category}
                    </h4>
                    <ul className="list-disc list-inside text-sm text-grey-600 dark:text-white/80 mt-2">
                      {techGroup.items.map((item, itemIndex) => (
                        <li key={itemIndex}>{item}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Skills;
