import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from './Home/home.jsx';
import AboutUs from './AboutUs/about_us.jsx';
import Gigs from './Gigs/gigs.jsx';
import Contact from './Contact/contact.jsx';

import Header from '../components/Header/header';

import './app.scss';

const Splash = () => (
  <div className={'splashWrapper'}>
    <img id='header-image' src='https://s3.amazonaws.com/boxera/box_era_stylized_large.png' />
  </div>
);

class App extends Component {

  // scrollToHeader() => {
  //   return;
  // };

  render() {
    const isHomePage = (window.location.pathname === '/');

    return (
      <div>
        {isHomePage && <Splash />}
        <div ref={'header'}>
          <Header />
        </div>
        <Route exact path='/' component={Home}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/gigs' component={Gigs}/>
        <Route path='/contact' component={Contact}/>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
