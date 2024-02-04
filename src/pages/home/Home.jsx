import React from "react";
import TopNav from "../../components/topnav/TopNav";
import Background from "../../assets/images/background.jpg";
import { Typewriter } from "react-simple-typewriter";
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Home = () => {
  
  return (
    <section className="home-container">
      <div className="name">
        MD Rabby Shek Suvo
        <div>
          I am a{" "}
          <Typewriter
            words={["JavaScript", "ReactJS", "NodeJS"]}
            loop={Infinity}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />{" "}
          Developer
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a href="">
                <FaFacebook />
              </a>
            </li>
            <li>
              <a href="">
                <FaXTwitter />
              </a>
            </li>
            <li>
              <a href="">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        {/* <button className="resume">Resume</button> */}
      </div>
    </section>
  );
};

export default Home;
