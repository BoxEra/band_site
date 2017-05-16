import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Home from './home.jsx';
import AboutUs from './about_us.jsx';
import Gigs from './gigs.jsx';
import Contact from './contact.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageViewed: 'home'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.history.replace(`/${this.state.pageViewed}`);
  }

  handleClick(e) {
    if (e.target.nodeName === 'LI') {
      this.props.history.replace(`/${e.target.id}`);
      this.setState({
        pageViewed: e.target.id
      });
    }
  }

  render() {
    return (
      <div>
        <ul className="header" onClick={this.handleClick}>
          <li id="home">HOME</li>
          <li id="about_us">ABOUT US</li>
          <img></img>
          <li id="gigs">GIGS</li>
          <li id="contact">CONTACT</li>
        </ul>

        <Route path='/home' component={Home}/>
        <Route path='/about_us' component={AboutUs}/>
        <Route path='/gigs' component={Gigs}/>
        <Route path='/contact' component={Contact}/>

      </div>
    );
  }
}

export default withRouter(App);
