import React from "react";
import HangMAN from "../../assets/images/hang-man-game.PNG";
import RPOS from "../../assets/images/r-pos.PNG";
import DOCRX from "../../assets/images/docrx.PNG";
import { NavLink } from "react-router-dom";
import useTitle from "../../hooks/useTitle";
const Projects = () => {
  useTitle("Projects");
  return (
    <section className="home-container">
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="project-body">
            {/* Repeat this structure for each project item */}
            <div className="project-item">
              <div className="project-image">
                <img src={HangMAN} alt="project image" />
              </div>
              <h1>Hang Man Game</h1>
              <div className="project-details">
                Hangman is a classic word-guessing game that has entertained and
                challenged players for generat...
                <div>
                <NavLink
                  to="https://github.com/rabby-shek/hangman_game"
                  target="_blank"
                >
                  <button className="resume"></button>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src={RPOS} alt="project image" />
              </div>
              <div className="project-details">
                <h1>R-POS</h1>
                R-POS is a comprehensive Restaurant Point-of-Sale System
                designed to streamline order processing... 
                <div>
                <NavLink
                  to="https://github.com/rabby-shek/project-minus-31"
                  target="_blank"
                >
                  <button className="resume"></button>
                </NavLink>
                </div>
              </div>
            </div>
            <div className="project-item">
              <div className="project-image">
                <img src={DOCRX} alt="project image" />
              </div>
              <div className="project-details">
                <h1>DocRx</h1>
                Cloud based Smart Prescription and  appointment management system...
                <div>
                <NavLink
                  to="https://smartprescription.hishabkitab.com/"
                  target="_blank"
                >
                  <button className="resume"></button>
                </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
