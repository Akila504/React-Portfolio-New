import React from 'react'
import './Project.css'
import placeholder from '../../Assets/placeholder-image.png'
import work from '../../Assets/get2work.jpeg'
import Habit from '../../Assets/HabitUi.jpeg'
import quiz from '../../Assets/Codequiz.jpeg'
import schedule from '../../Assets/scheduler.jpeg'
import refactor from '../../Assets/CodeRefactor.jpeg'
import profile from '../../Assets/ProfileGenerator.jpeg'


import { NavLink } from 'react-router-dom';

const Project = () => {


  return (
    <div className='work-container'>
      <h1 className='project-heading'>Projects</h1>
      <div className='project-container'>
        <div className='project-card'>
          <img src={work} alt='image' />
          <h2 className="project-title">Get2Work</h2>
          <div className='pro-details'>
            <p>Introducing 'Get To Work' – the one-page portfolio website builder for web developers entering the job market. Simply answer a few questions about yourself, and we'll generate custom HTML, CSS, and JavaScript files, emailed to you instantly. Skip the coding legwork and Get To Work faster!</p>
            <div className='pro-btns'>
              <NavLink to="https://get-2-work.netlify.app" className="btn">View</NavLink>
              <NavLink to="https://github.com/quikstart86/Get-2-work" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={Habit} alt='image' />
          <h2 className="project-title">HabitUi</h2>
          <div className='pro-details'>
            <p> a habit tracking and management tool, featuring sections for inspirational quotes, habit tracking, weather at their chosen location and a joke generator. Users can add, track, and delete habits, view their progress on a chart, and get a random joke. User information is stored in localStorage so the user can return to the app over a period of time to track their progress.</p>
            <div className='pro-btns'>
              <NavLink to="https://jonnoclifford.github.io/habitui/" className="btn">View</NavLink>
              <NavLink to="https://github.com/jonnoclifford/habitui/" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={quiz} alt='image' />
          <h2 className="project-title">Code Quiz</h2>
          <div className='pro-details'>
            <p>A Harry Potter code quiz created using JavaScript</p>
            <div className='pro-btns'>
              <NavLink to="https://akila504.github.io/Code-Quiz/" className="btn">View</NavLink>
              <NavLink to="https://github.com/Akila504/Code-Quiz" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={schedule} alt='image' />
          <h2 className="project-title">Work Day Scheduler</h2>
          <div className='pro-details'>
            <p>a dynamic work day scheduler powered by Javascript </p>
            <div className='pro-btns'>
              <NavLink to="https://akila504.github.io/Work-Day-Scheduler/" className="btn">View</NavLink>
              <NavLink to="https://github.com/Akila504/Work-Day-Scheduler" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={profile} alt='image' />
          <h2 className="project-title">Team Profile Geneator</h2>
          <div className='pro-details'>
            <p> A command line interface program created with NodeJs that inquires and compiles employee information into a generated HTML webpage</p>
            <div className='pro-btns'>
              <NavLink to="https://github.com/Akila504/Team-Profile-Generator/blob/main/starter/output/team.html" className="btn">View</NavLink>
              <NavLink to="https://github.com/Akila504/Team-Profile-Generator" className="btn">Source</NavLink>
            </div>
          </div>
        </div>
        <div className='project-card'>
          <img src={refactor} alt='image' />
          <h2 className="project-title">Code Refactor</h2>
          <div className='pro-details'>
            <p>The purpose of this project was to refactor the exisitng code for the Horiseon Website, specifcally to change the non semantic div tags to semantic tags, add in alt text to images and adjust the CSS</p>
            <div className='pro-btns'>
              <NavLink to="https://akila504.github.io/horiseon-code-refactor/" className="btn">View</NavLink>
              <NavLink to="https://github.com/Akila504/horiseon-code-refactor" className="btn">Source</NavLink>
            </div>
          </div>
        </div>

      </div>


    </div>
  );


}

export default Project