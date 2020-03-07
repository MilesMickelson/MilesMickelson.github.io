import React from 'react';

const coin = require('../images/coin.png');
const wheel = require('../images/wheel.png');
const openChest = require('../images/open-chest.png');
const closedChest = require('../images/closed-chest.png');
const pirate = require('../images/pirate.png');

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      home: true,
      projects: false,
      credentials: false,
      about: false,
    };
    this.toggleHome = this.toggleHome.bind(this);
    this.toggleProjects = this.toggleProjects.bind(this);
    this.toggleCredentials = this.toggleCredentials.bind(this);
    this.toggleAbout = this.toggleAbout.bind(this);
  }

  toggleHome() {
    this.setState({
      home: true,
      projects: false,
      credentials: false,
      about: false,
    });
  }

  toggleProjects() {
    this.setState({
      home: false,
      projects: true,
      credentials: false,
      about: false,
    });
  }

  toggleCredentials() {
    this.setState({
      home: false,
      projects: false,
      credentials: true,
      about: false,
    });
  }

  toggleAbout() {
    this.setState({
      home: false,
      projects: false,
      credentials: false,
      about: true,
    });
  }

  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <nav id='nav-wrap' aria-label='primary'>
            <a className='nav-anchor' href='#/' aria-current='page'>
              <img
                className={ `nav-icon ${this.state.home ? 'isSpinning' : 'notSpinning'}` }
                onClick={ this.toggleHome }
                id='wheel'
                src={ wheel }
                title='Home Page'
                alt='ship wheel'
                rel='preload'
              />
            </a>
            <a className='nav-anchor' href='#/Projects' aria-current='page'>
              <img
                className={ `nav-icon ${this.state.projects ? 'invisible' : 'visible'}` }
                onClick={ this.toggleProjects }
                id='closedChest'
                src={ closedChest }
                title='Projects Page'
                alt='closed chest'
                rel='preload'
              />
              <img
                className={ `nav-icon ${this.state.projects ? 'visible' : 'invisible'}` }
                onClick={ this.toggleProjects }
                id='openChest'
                src={ openChest }
                title='Projects Page'
                alt='open chest'
                rel='preload'
              />
            </a>
            <a className='nav-anchor' href='#/Credentials' aria-current='page'>
              <img
                className={ `nav-icon ${this.state.credentials ? 'swivel' : 'noSwivel'}` } 
                onClick={ this.toggleCredentials }
                id='coin'
                src={ coin }
                title='Credentials Page'
                alt='pirate coin'
                rel='preload'
              />
            </a>
            <a className='nav-anchor' href='#/About' aria-current='page'>
              <img
                className={ `nav-icon ${this.state.about ? 'ghost-pirate' : 'plain-pirate'}` }
                onClick={ this.toggleAbout }
                id='pirate'
                src={ pirate }
                title='About Page'
                alt='pirate skull'
                rel='preload'
              />
            </a>
          </nav>
        </div>
      </div>
    );
  }
}
