import React from 'react';

const dagger = require('../images/dagger.png');
const pool = require('../images/pool.jps');

export default class About extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3>About</h3>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' rel='preload' />
              Ambition
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              Miles Mickelson, born in Sacramento, California, currently residing&nbsp;
              in San Diego and looking to fulfill a position as full-stack junior&nbsp;
              developer. I am bound and determined to become the best developer&nbsp;
              that I can be. And I believe that taking my strengths and variety&nbsp;
              of work experience into account, that it will culminate into becoming&nbsp;
              a valuable asset for anyone who employs me. It would bring me a great&nbsp;
              satisfaction to produce valuable results that have a positive&nbsp;
              impact on business and people's lives.
            </p>
          </section>
          <section className='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Philosophy
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <p>
              To achieve success in your venture, it comes down to daily&nbsp;
              habitual routines and a persevering mindset. I genuinely believe&nbsp;
              in being highly organized, coordinated, efficient, and maintaining&nbsp;
              specific goals throughout the planning and execution process.&nbsp;
            </p>
          </section>
          <section classsName='center-wrap'>
            <h4>
              <img className='dagger1' src={ dagger } alt='dagger' />
              Hobbies
              <img className='dagger2' src={ dagger } alt='dagger' />
            </h4>
            <div className='clearfix-wrap'>
              <img id='pool-pic' src={ pool } alt='playing pool' />
              <p id='hobbies-info'>
                Being a creative and competitive person, I enjoy many activities with&nbsp;
                friends, family, and others who enjoy the same endeavors as me.&nbsp;
                Most notably, I am very passionate about playing competitive pool.&nbsp;
                A well-known player and instructor David Nakano recognized this and&nbsp;
                has mentored me for years as a best friend. After applying his&nbsp;
                lessons with daily immersive practice, I competed in the U.S.&nbsp;
                Open Amateurs Tournament, making it one level away from an inclusive&nbsp;
                trip to compete in the next tier. I also enjoy reading books, playing&nbsp;
                games, hiking, and watching movies or shows with my girlfriend,&nbsp;
                Samantha, The Office is our personal favorite.
              </p>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
