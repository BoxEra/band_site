import React, { Component } from 'react';

import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Scroll from 'react-scroll';
const scroll = Scroll.animateScroll;

import Home from './Home/home.jsx';
import AboutUs from './AboutUs/about_us.jsx';
import Gigs from './Gigs/gigs.jsx';
import Contact from './Contact/contact.jsx';

import Header from '../components/Header/header';

import './app.scss';

const Splash = ({ scroll }) => (
  <div className={'splashWrapper'}>
    <img id='header-image' src='https://s3.amazonaws.com/boxera/box_era_stylized_large.png' />
    <div className='header-title'><strong>THE KNOX EP</strong> OUT NOW</div>
    <div className='scroll-container'>
      <div className='scroll-text' onClick={scroll}>SCROLL FOR MORE</div>
      <i className="fa fa-angle-down fa-3x" onClick={scroll} style={{ariaHidden: "true"}}></i>
    </div>
  </div>
);

class App extends Component {

  scrollToHeader() {
    scroll.scrollTo(680);
  }

  render() {
    const isHomePage = (window.location.pathname === '/');

    return (
      <div>
        {isHomePage && <Splash scroll={this.scrollToHeader}/>}
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
