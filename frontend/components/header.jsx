import React from 'react';
import { Route } from 'react-router-dom';
import { withRouter } from 'react-router';
import Tour from './tour.jsx';
import Music from './music.jsx';
import Photos from './photos.jsx';
import Contact from './contact.jsx';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageViewed: 'tour'
    };

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.history.replace(`/${this.state.pageViewed}`);
  }

  handleClick(e) {
    if (e.target.nodeName === 'LI') {
      this.props.history.replace(`/${e.target.innerHTML}`);
      this.setState({
        pageViewed: e.target.innerHTML
      });
    }
  }

  render() {
    return (
      <div>
        <ul onClick={this.handleClick}>
          <li>tour</li>
          <li>music</li>
          <li>photos</li>
          <li>contact</li>
        </ul>
        <Route path='/tour' component={Tour}/>
        <Route path='/music' component={Music}/>
        <Route path='/photos' component={Photos}/>
        <Route path='/contact' component={Contact}/>
      </div>
    );
  }
}

export default withRouter(Header);
