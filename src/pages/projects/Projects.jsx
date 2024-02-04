import React from 'react';
import HangMAN from '../../assets/images/hang-man-game.PNG'
import { NavLink } from 'react-router-dom';
const Projects = () => {
  return (
    <section className='home-container'>
      <div className="projects">
        <h1>Projects</h1>
        <div className="project-container">
      <div className="project-body">
        {/* Repeat this structure for each project item */}
        <div className="project-item">
          <div className="project-image">
            <img src={HangMAN} alt="project image" />
          </div>
          <div className="project-details">
          Hangman is a classic word-guessing game that has entertained and challenged players for generations. 
          <NavLink to="https://github.com/rabby-shek/hangman_game" target='_blank'><button className='resume'></button></NavLink>
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src="" alt="project image" />
          </div>
          <div className="project-details">
            Project details
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src="" alt="project image" />
          </div>
          <div className="project-details">
            Project details
          </div>
        </div>
        <div className="project-item">
          <div className="project-image">
            <img src="" alt="project image" />
          </div>
          <div className="project-details">
            Project details
          </div>
        </div>
      </div>
    </div>
      </div>
    </section>
  )
}

export default Projects;
