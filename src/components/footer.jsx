import React from 'react';

const spyglass = require('../images/spyglass.png');
const breakline2 = require('../images/breakline2.png');
const github = require('../images/github.png');
const medium = require('../images/medium.png');
const linkedin = require('../images/linkedin.png');
const youtube = require('../images/youtube.png');
const pigeon = require('../images/pigeon.png');

export default class Footer extends React.Component {
  render() {
    return (
      <footer className='container-A'>
        <div className='container-B'>
          <div id='resume-wrap'>
            <a
              id='resume-link'
              href='https://drive.google.com/file/d/1Ck6VwC7QesQpox1FijtzQNSBhzMdNuOF/view?usp=sharing'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='resume link'
              title='Resume PDF'
            >
              <img className='spyglass' src={ spyglass } alt='spyglass' />
              View Resume PDF
            </a>
          </div>
          <div className='center-wrap'>
            <img id='breakline2' src={ breakline2 } alt='breakline' />
          </div>
          <div id='glyph-wrap'>
            <a
              href='https://www.linkedin.com/in/milesmickelson/'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='linkedin account link'
              title='LinkedIn Account'
            >
              <img className='glyph' id='linkedin' src={ linkedin } alt='linkedin' />
            </a>
            <a
              href='https://github.com/MilesMickelson'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='github account link'
              title='GitHub Account'
            >
              <img className='glyph' id='github' src={ github } alt='GitHub' />
            </a>
            <a
              href='mailto:milesmickelson87@gmail.com'
              aria-label='send email link'
              title='Send Email'
            >
              <img id='pigeon' src={ pigeon } alt='email' />
            </a>
            <a
              href='https://medium.com/@milesmickelson87'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='medium account link'
              title='Medium Account'
            >
              <img className='glyph' id='medium' src={ medium } alt='medium' />
            </a>
            <a
              href='https://www.youtube.com/channel/UCAnL9rFU-4ycu4Lmu08-pkw?view_as=public'
              target='_blank'
              rel='noopener noreferrer'
              aria-label='youtube account link'
              title='YouTube Account'
            >
              <img className='glyph' id='youtube' src={ youtube } alt='youtube' />
            </a>
          </div>
          {/* <div className='accreditation'>
          </div> */}
        </div>
      </footer>
    );
  }
}
