import React, { Component } from 'react';
import ReactDOM from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';

import Home from './Home/home.jsx';
import AboutUs from './AboutUs/about_us.jsx';
import Gigs from './Gigs/gigs.jsx';
import Contact from './Contact/contact.jsx';
import PressKit from './PressKit/press-kit.js';
import Header from '../components/Header/header';

import './app.scss';

const Splash = ({ scroll }) => (
  <div className={'splashWrapper'}>
    <img id='header-image' src='https://s3.amazonaws.com/boxera/box_era_stylized_large.png' />
    <div className='header-title'><strong>XANADU EP</strong> OUT NOW</div>
    <div className='scroll-container'>
      <div className='scroll-text' onClick={scroll}>SCROLL FOR MORE</div>
      <i className="fa fa-angle-down fa-3x" onClick={scroll} style={{ariaHidden: "true"}}></i>
    </div>
  </div>
);

class App extends Component {
  constructor(props) {
    super(props);
    this.element = null;

    this.scrollToHeader = this.scrollToHeader.bind(this);
  }

  scrollToHeader() {
    const headerNode = this.element;
    window.scrollTo({
      top: headerNode.offsetTop,
      left: 0,
      behavior: 'smooth'
    });
  }

  render() {
    const isHomePage = (window.location.pathname === '/');

    return (
      <div>
        {isHomePage && <Splash scroll={this.scrollToHeader}/>}
        <div ref={ ref => this.element = ref }>
          <Header />
        </div>
        <Route exact path='/' component={Home}/>
        <Route path='/about-us' component={AboutUs}/>
        <Route path='/press-kit' component={PressKit}/>
        <Route path='/gigs' component={Gigs}/>
        <Route path='/contact' component={Contact}/>
      </div>
    );
  }
}

const AppWithRouter = withRouter(App);

export default AppWithRouter;
