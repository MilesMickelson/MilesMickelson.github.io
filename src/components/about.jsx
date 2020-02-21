import React from 'react';

const dagger = require('../images/dagger.png');
const pool = require('../images/pool.jps');

export default class About extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <div className='center-wrap'>
            <h3>About</h3>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              Ambition
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Miles Mickelson, born in Sacramento, California, currently residing 
              in San Diego and looking to fulfill a position as full-stack junior 
              developer. I am bound and determined to become the best developer 
              that I can be. And I believe that taking my strengths and variety 
              of work experience into account, that it will culminate into becoming 
              a valuable asset for anyone who employs me. It would bring me a great 
              satisfaction to produce valuable results that have a positive 
              impact on business and people's lives.
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Philosophy
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              To achieve success in your venture, it comes down to daily 
              habitual routines and a persevering mindset. I genuinely believe 
              in being highly organized, coordinated, efficient, and maintaining 
              specific goals throughout the planning and execution process. 
            </p>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Hobbies
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Being a creative and competitive person, I enjoy many activities with 
              friends, family, and others who enjoy the same endeavors as me. 
              Most notably, I am very passionate about playing competitive pool. 
              A well-known player and instructor David Nakano recognized this and 
              has mentored me for years as a best friend. After applying his 
              lessons with daily immersive practice, I competed in the U.S. 
              Open Amateurs Tournament, making it one level away from an inclusive 
              trip to compete in the next tier. I also enjoy reading books, playing 
              games, hiking, and watching movies or shows with my girlfriend, 
              Samantha, The Office is our personal favorite.
            </p>
            <img id='pool' src={ pool } alt='playing pool' />
          </div>
        </div>
      </div>
    );
  }
}
