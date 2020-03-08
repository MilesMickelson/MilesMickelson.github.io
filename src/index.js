import React from 'react';
import { render } from 'react-dom';
import App from './app';

import './css/style.scss';

const ghpages = require('gh-pages');

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}

ghpages.publish('dist', {
  branch: 'master',
  repo: 'https://github.com/MilesMickelson/MilesMickelson.github.io.git'
}, callback);
