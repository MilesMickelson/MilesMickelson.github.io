import React from 'react';

import {
  HashRouter as Router,
  Route
} from 'react-router-dom';

import Sticky from 'react-sticky-el';

import Title from './components/title';
import NavBar from './components/navbar';
import ScrollToTop from './components/scrolltotop';
import Home from './components/home';
import Projects from './components/projects';
import About from './components/about';
import Credentials from './components/credentials';
import Footer from './components/footer';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <Title />
        <Sticky style={ { 'z-index': '9999' } }>
          <NavBar />
        </Sticky>
        <Router>
          <ScrollToTop />
          <Route exact path='/' component={ Home } />
          <Route exact path='/Projects' component={ Projects } />
          <Route exact path='/About' component={ About } />
          <Route exact path='/Credentials' component={ Credentials } />
        </Router>
        <Footer />
      </div>
    );
  }
}
