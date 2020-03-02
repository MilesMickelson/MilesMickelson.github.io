import React from 'react';

const dagger = require('../images/dagger.png');

export default class Home extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3>Hiii</h3>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              Introduction
              <img className='dagger2' src={ dagger } alt='dagger' rel='preload' />
            </h4>
            <p>
              Hi, I’m Miles Mickelson; thank you for visiting my website dedicated&nbsp;
              to illustrating my proficiencies and shedding some light on who I am.&nbsp;
              Navigate using the menu icons above and please feel free to get in&nbsp;
              touch with me or review my credentials using the icons in the footer anytime.
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              Seeking
              <img className='dagger2' src={ dagger } alt='dagger' rel='preload' />
            </h4>
            <p>
              Looking to fulfill a fullstack junior developer position,&nbsp;
              preferably with various dynamic roles on an ambitious team with&nbsp;
              consistent, high-quality output and great camaraderie. Highly value&nbsp;
              learning from a senior engineer’s counsel and insight for growth&nbsp;
              and direction.
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              Proficiencies
              <img className='dagger2' src={ dagger } alt='dagger' rel='preload' />
            </h4>
            <p>
              I love to accept and embrace new challenges; so I do not feel limited here&nbsp;
              and look forward to becoming a highly-skilled and well-rounded&nbsp;
              knowledgeable developer.
            </p>
          </section>
          <section id='prof-list-wrap'>
            <ul>
              <li>Javascript</li>
              <li>React</li>
              <li>Redux</li>
              <li className='last-list-item'>Sass+Less</li>
            </ul>
            <ul>
              <li>MongoDB</li>
              <li>MySQL</li>
              <li>Loopback</li>
              <li className='last-list-item'>Mocha+Chai</li>
            </ul>
            <ul>
              <li>Git Workflow</li>
              <li>Heroku</li>
              <li>CircleCI</li>
              <li className='last-list-item'>Scrum+Agile</li>
            </ul>
          </section>
        </main>
      </div>
    );
  }
}
