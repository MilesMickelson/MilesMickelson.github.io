import React from 'react';
import { render } from 'react-dom';
import App from './app';

import './css/style.scss';

//original src index.js DO NOT DELETE
// import React from 'react';
// import { render } from 'react-dom';
// import App from './app';
// import './css/style.scss';
// function renderApp() {
//   render(<App />, root);
// }
// renderApp(); -->

render(<App />, document.getElementById('root'));

if (module.hot) {
  module.hot.accept();
}
