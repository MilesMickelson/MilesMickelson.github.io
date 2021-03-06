import React from 'react';

const dagger = require('../images/dagger.png');
const speakeasy = require('../images/speakeasy.jpg');

export default class Credentials extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      speakeasyInfo: false,
      machiningInfo: false,
      carpentryInfo: false,
    };
    this.speakeasyToggle = this.speakeasyToggle.bind(this);
    this.machiningToggle = this.machiningToggle.bind(this);
    this.carpentryToggle = this.carpentryToggle.bind(this);
  }

  speakeasyToggle() {
    if (this.state.speakeasyInfo === true) {
      this.setState({ speakeasyInfo: false });
    } else {
      this.setState({ speakeasyInfo: true });
    }
  }

  machiningToggle() {
    if (this.state.machiningInfo === true) {
      this.setState({ machiningInfo: false });
    } else {
      this.setState({ machiningInfo: true });
    }
  }

  carpentryToggle() {
    if (this.state.carpentryInfo === true) {
      this.setState({ carpentryInfo: false });
    } else {
      this.setState({ carpentryInfo: true });
    }
  }

  render() {
    return (
      <div className='container-A'>
        <main className='container-B'>
          <h3>
            <img className='dagger1' src={ dagger } alt='' />
            Credentials
            <img className='dagger2' src={ dagger } alt='' />
          </h3>
          <section>
            <h4>Publications</h4>
            <div className='large-list-wrap'>
              <ul>
                <li className='list-item-link'>
                  <a
                    href='https://medium.com/comprehensive-guide-to-the-ultimate-developers'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='medium developers tech article'
                  >
                    Medium: A Comprehensive Guide to the Ultimate Developers Tech
                  </a>
                </li>
                <li className='list-item-link'>
                  <a
                    href='https://medium.com/an-exciting-new-career-from-bartender-to-developer'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='medium career transitioning journey article'
                  >
                    Medium: An Exciting New Career from Bartender to Developer
                  </a>
                </li>
                <li>YouTube: Demonstration of Portfolio Website–Coming Soon!</li>
              </ul>
            </div>
          </section>
          <section>
            <h4>Certifications</h4>
            <div className='large-list-wrap'>
              <ul>
                <li className='list-item-link'>
                  <a
                    href='https://drive.google.com/file/d/1bceTh6L5v9NSualkrnz3hQz1ltloZQuL/view'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='SDCS Graduation Certificate'
                  >
                    San Diego Code School: Fullstack Developer - Graduated 2019
                  </a>
                </li>
                <li className='list-item-link'>
                  <a
                    href='https://skillshop.exceedlms.com/student/award/48040547'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='google ads display certificate'
                  >
                    Google Ads: Display Certificate 04/2020
                  </a>
                </li>
                <li className='list-item-link'>
                  <a
                    href='https://skillshop.exceedlms.com/student/award/48046596'
                    className='list-item-link'
                    target='_blank'
                    rel='noopener noreferrer preload'
                    aria-label='google ads search certificate'
                  >
                    Google Ads: Search Certificate 04/2020
                  </a>
                </li>
              </ul>
            </div>
          </section>
          <section>
            <h4>Experience</h4>
            <p>
              I have always had a highly motivated and self-disciplined personality, seeking the utmost professionalism and reliability in the workplace. Throughout a variety of demanding roles, I have been acknowledged for my capacity to build strong, collaborative relationships, and for an ability to accept a multitude of responsibilities. Furthermore, being touted for competence to lead in a team environment and work as a team player, bestowing positive contributions to the success of our objective.
            </p>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.speakeasyInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.speakeasyToggle }
                    className='details-button'
                    aria-label='open bartending details'
                    aria-controls='speakeasy-info'
                    aria-expanded='false'
                  >
                  Speakeasy Bartending
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `${this.state.speakeasyInfo ? 'visible' : 'inVisible'}` }>
              <h5>Speakeasy Manager</h5>
              <div className='clearfix-wrap'>
                <img className='dark-glow-image' id='speakeasy-pic' src={ speakeasy } alt='speakeasy' />
                <div className='center-wrap'>
                  <p id='speakeasy-info' tabIndex='0'>
                    An unexpected opportunity arrived for me when a restaurant opened up in my neighborhood. I had never worked at one before but found myself hired as a busser & food runner over many applicants. Within a year, I was able to fill the role of server and positioned as barback per my request. After gaining knowledge through attending classes and learning on my own time, I earned a promotion to the speakeasy. Only the highest quality and most knowledgeable bartenders worked in there. Eventually, I secured the role of Lead Bartender, responsible for accommodating all private parties, weekly events, and maintaining an immaculate establishment. My service, passion, attention to detail, and memory for regular’s preferences allowed me to earn a reputation for a local’s favorite bartender, among many. Often working alone, my position required performing many roles and consistently methodical self-sufficiency.
                  </p>
                  <button
                    type='submit'
                    className='close-details red-glow-text'
                    aria-label='close bartending details'
                    aria-controls='speakeasy-info'
                    aria-expanded='true'
                    onClick={ this.speakeasyToggle }
                  >
                  Close Details
                  </button>
                </div>
              </div>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.machiningInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.machiningToggle }
                    className='details-button'
                    aria-label='open machining details'
                    aria-controls='machining info'
                    aria-expanded='false'
                  >
                  Machine Operations
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.machiningInfo ? 'visible' : 'inVisible'}` }>
              <h5>Machine Operations Lead</h5>
              <p id='machining info' tabIndex='0'>
                In 2012 an acquaintance of mine recommended me to a local sign shop where I was hired and started on the production floor. After earning trust and acknowledgment for high-quality output, within a few months, I trained to run every machine in the production room. I eventually gained responsibility for project workflow design, inventory management, materials procurement, and interdepartmental communication throughout the manufacturing process.
              </p>
              <button
                type='submit'
                className='close-details red-glow-text'
                aria-label='close machining details'
                aria-controls='machining info'
                aria-expanded='true'
                onClick={ this.machiningToggle }
              >
              Close Details
              </button>
            </div>
            <div className='large-list-wrap'>
              <ul className={ `${this.state.carpentryInfo ? 'inVisible' : 'visible'}` }>
                <li>
                  <button
                    type='submit'
                    onClick={ this.carpentryToggle }
                    className='details-button'
                    aria-label='view carpentry details'
                    aria-controls='carpentry info'
                    aria-expanded='false'
                  >
                  Union Carpentry
                  </button>
                </li>
              </ul>
            </div>
            <div className={ `center-wrap ${this.state.carpentryInfo ? 'visible' : 'inVisible'}` }>
              <h5>San Onofre Carpenter</h5>
              <p id='carpentry info' tabIndex='0'>
                At 16 years of age, I started my first business pressure washing for people in my neighborhood and simultaneously delivered for Pizza Hut after getting my license later. During this time, a neighbor, Bill Newton, took me under his wing and offered me an opportunity to work at the San Onofre Nuclear Power Plant. He was the highest-level manager for the Union Carpenter's Trade on site. During the first season, my role was supporting the tradesman. However, after being fully immersed 60 hours a week for over three months, I decided to go through the Union Carpenters apprenticeship. I was in the trade for the next six years employed by many contractors doing finish, roofing, concrete, and scaffolding work. The reputation for my work ethic earned me recommendations from many of my foremen on numerous job sites. During my last contract at the power plant, I fulfilled a lead role for journeyman carpenters new to the job site. I'm still great friends with Bill Newton, the man who introduced me to the trade, and many of the individuals I worked with together today.
              </p>
              <button
                type='submit'
                className='close-details red-glow-text'
                aria-label='close carpentry details'
                aria-controls='carpentry info'
                aria-expanded='true'
                onClick={ this.carpentryToggle }
              >
              Close Details
              </button>
            </div>
          </section>
        </main>
      </div>
    );
  }
}
