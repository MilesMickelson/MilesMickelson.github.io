import React from 'react';

const dagger = require('../images/dagger.png');
const audit = require('../images/audit.jps');

export default class Projects extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <h3>Projects</h3>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              The Total Machine
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              At the 2018 Tealium Hackathon event, my team built a data statistic 
              display tool to give Tealium an added service for their clients, 
              supplying them a way to achieve coordinated marketing strategies 
              through a simple information viewing system. As a result of our 
              quality interface, overall presentation, and camaraderie, we finished 
              in the top 3 finalists. My responsibilities were designing the user 
              interface and presenting our project to a panel judges.
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Ranger Radar
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              At the 2019 San Diego Zoo Global Hackathon event, my team built a data statistic 
              display tool to give Tealium an added service for their clients, 
              supplying them a way to achieve coordinated marketing strategies 
              through a simple information viewing system. As a result of our 
              quality interface, overall presentation, and camaraderie, we finished 
              in the top 3 finalists. My responsibilities were designing the user 
              interface and presenting our project to a panel judges.
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              MilesMickelson.com
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <img id='audit' src={ audit } alt='audit score' />
            <p>
              Description coming soon, thank you for your interest.
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              San Diego Code School Highlights
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              I learned so much going to code school from every single project completed and article 
              read; listed below are just a few of the ones I'm most proud of with a link to their Github repo.
            </p>
          </div>
          <div className='project-list-wrap'>
            <ul>
              <li>
                <a href='https://github.com/MilesMickelson/NASA-Viewer' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                NASA Viewer
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/REACT200-Movie-Finder' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                Movie Finder
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/REACT200-Weather-App' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                Weather App
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/REACT100-VSTDA' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                VSTDA
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://github.com/MilesMickelson/NODE200-Connecting-MongoDB' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                MongoDB Connect
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/DB200-MongoDB-Exercises' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                MongoDB Exercises
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/DB100-MySQL-Sakila' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                MySQL Sakila
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/NODE200-Loopback-Workshop' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                Loopback Workshop
                </a>
              </li>
            </ul>
            <ul>
              <li>
                <a href='https://github.com/MilesMickelson/OPS200-Heroku-Deployment' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                Heroku Deployment
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/OPS200-CircleCI' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                CircleCI Deployment
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/OPS200-Prove-It-Works' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                Prove It Works
                </a>
              </li>
              <li>
                <a href='https://github.com/MilesMickelson/REACT100-San-Diego-Top-Spots' target='_blank' rel='noopener noreferrer preload' aria-label='github repo link'>
                SD Top Spots
                </a>
              </li>
            </ul>
          </div>
          <div className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Cheryl Lee's Custom Portfolio Website
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Frontend SDCS group project showcasing Ms. Lee's achievements, 
              affiliations, and credentials with a clean and classy appearance, 
              including an automated contact page. Leveraging my soft skills 
              and proficiencies in HTML and CSS w/SASS, I played a crucial 
              leading role in this project, designing a responsive cross-platform 
              website with well-kept code. I was responsible for designing the main 
              title, navigation bar, the home page, and the footer specifically. 
              Being passionate about this project, I followed up with Ms. Lee to 
              update and finalize the project, which can be viewed here at 
              www.CherylRLee.com.
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              SDCS Student Tracker
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Backend SDCS group project that gave me perspective on employing 
              many tools simultaneously with React/Redux, MongoDB, Loopback, and 
              workflow with Git, Scrum, and Agile. We successfully integrated a 
              workspace slackbot with customized slash commands allowing students 
              to submit or update their information and view their statistics on 
              the website. Individually tasked with creating a slash command to 
              input your information in the slack workspace, my responsibility 
              in the team developed necessitating the assurance of managing our 
              highest priority task, communicating, scheduling, and assisting 
              in Git, Scrum, and Agile workflow.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
