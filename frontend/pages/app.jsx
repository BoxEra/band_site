import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from './Home/home.jsx';
import AboutUs from './AboutUs/about_us.jsx';
import Gigs from './Gigs/gigs.jsx';
import Contact from './Contact/contact.jsx';

import Header from '../components/Header/header';


const App = withRouter(({
  history,
}) => {
  const scrollToHeader = () => {
    return;
  };

  const isHomePage = (window.location.pathname === '/');
  return (
    <div>
      {isHomePage && <div className={'splashWrapper'}>{'splash'}</div>}
      <div ref={'header'}>
        <Header />
      </div>
      <Route path='/' component={Home}/>
      <Route path='/about-us' component={AboutUs}/>
      <Route path='/gigs' component={Gigs}/>
      <Route path='/contact' component={Contact}/>
    </div>
  );
});

const AppWithRouter = withRouter(App);

export default AppWithRouter;
