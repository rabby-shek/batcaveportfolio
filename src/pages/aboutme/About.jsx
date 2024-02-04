import React from "react";
import { RiReactjsFill } from "react-icons/ri";
import { FaPhp, FaNode, FaCss3, FaHtml5 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { MdHtml } from "react-icons/md";
import { RiBootstrapLine } from "react-icons/ri";
import useTitle from "../../hooks/useTitle";
const About = () => {
  useTitle("About Me");
  return (
    <section className="home-container">
      <div className="about">
        About Me
        <hr style={{ width: "100px" }} />
        <p className="text">
          "I am a JavaScript developer with three years of experience working as
          a web developer at a well-renowned company in Dhaka, Bangladesh."
        </p>
        Skills
        <hr style={{ width: "55px" }} />
        <div className="skills">
          <ul>
            <li>
              <RiReactjsFill />
            </li>
            <li>
              <FaPhp />
            </li>
            <li>
              <IoLogoJavascript />
            </li>
            <li>
              <FaNode />
            </li>
            <li>
              <FaHtml5 />
            </li>
            <li>
              <FaCss3 />
            </li>
            <li>
              <RiBootstrapLine />
            </li>
          </ul>
        </div>
        Education
        <hr style={{ width: "105px" }} />
        <div className="education">
          Computer Science and Engineering
          <div>Sonargoan University (2020 - 2024)</div>
        </div>
      </div>
    </section>
  );
};

export default About;
