import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 mb-8 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm Frontend Developer, I spend my whole day, practically everyday,
        experimenting with React, JavaScript, CSS, HTML and other tools while
        inhaling a wide variety of potentially useful information through a few
        hundred blogs
      </motion.p>
    </>
  );
};

export default SectionWrapper(About, 'about');
