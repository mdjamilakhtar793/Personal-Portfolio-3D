/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../Constants";
import { fadeIn } from "../Utils/Motion";
import { SectionWrapper } from "../Hoc";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div
          // eslint-disable-next-line react/no-unknown-property
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px]
          flex justify-evenly items-center flex-col
          "
        >
          <img src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};
const About = () => {
  return (
    <>
      <motion.div>
        <p className={`${styles.heroSubText}`}>Introduction</p>
        <h2 className={styles.heroHeadText}>OverViews.</h2>
      </motion.div>
      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        I'm a Skilled Software developer with JavaScript,Java,MySql and
        Expertise in Frameworks like ReactJs,NextJs, NodeJs,Express, MongoDb.
        I'm a quick Learner and collaborate closely with clients to create
        Efficient , Scalable and user-friendly solution that solve real-world
        problems. Let's together to bring your Idea's to Life. !
        <span
          style={{
            color: "yellow",
            fontSize: "20px",
            fontWeight: "bold",
            border: "2px solid blue",
            backgroundColor: "Background",
            paddingLeft: "10px",
            paddingRight: "10px",
            paddingTop: "3px",
            paddingBottom: "3px",
            borderRadius: "15px",
          }}
        >
          <a href="mailto:mdjamilakhtar793@gmail.com">Hire Me</a>
        </span>
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export default SectionWrapper(About, "about");
