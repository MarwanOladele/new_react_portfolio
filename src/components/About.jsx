import React from "react";
import { motion } from "framer-motion";
import { styles } from "../style";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { BsTwitter } from "react-icons/bs";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

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
      <motion.div variants={fadeIn("", "", 0.1, 1)}>
        <h3 className="sm:text-[24px] text-[14px] uppercase tracking-wider text-[#915eff]">
          LET'S CONNECT{" "}
        </h3>
        <div className="flex flex-row gap-3 mt-3">
          <a href="https://github.com/MarwanOladele" target="blank">
            <AiFillGithub
              className="text-secondary hover:text-white"
              style={{ fontSize: "28px" }}
            />
          </a>
          <a
            href="https://www.linkedin.com/in/marwan-oladele-4aa07316b/"
            target="blank"
          >
            <AiFillLinkedin
              className="text-secondary hover:text-white"
              style={{ fontSize: "28px" }}
            />
          </a>
          <a href="https://twitter.com/officialoladele" target="blank">
            <BsTwitter
              className="text-secondary hover:text-white"
              style={{ fontSize: "28px" }}
            />
          </a>
        </div>
      </motion.div>
    </>
  );
};

export default SectionWrapper(About, "about");
