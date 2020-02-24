import React from 'react';

const crossedKeys = require('../images/crossedkeys.png');
const breakline1 = require('../images/breakline1.png');

export default class Title extends React.Component {
  render() {
    return (
      <div className='container-A'>
        <div className='container-B'>
          <header id='maintitle-wrap'>
            <h1 className='title' id='title-part1' aria-label='main title'>M</h1>
            <img id='crossed-keys' src={ crossedKeys } alt='crossed keys' />
            <h1 className='title' id='title-part2' aria-label='main title'>M</h1>
          </header>
          <header id='subtitle-wrap'>
            <h2 id='sub-title' aria-label='sub title'>Fullstack&nbsp;Developer</h2>
            <img id='breakline1' src={ breakline1 } alt='break line' />
          </header>
          <header id='navlabels-wrap'>
            <em id='home'>Home</em>
            <em>Projects</em>
            <em>Credentials</em>
            <em>About</em>
          </header>
        </div>
      </div>
    );
  }
}
