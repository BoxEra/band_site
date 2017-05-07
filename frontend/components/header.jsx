import React from 'react';
import { withRouter } from 'react-router';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      pageViewed: 'tour'
    };
  }

  componentDidMount() {
    this.props.router.push(this.state.pageViewed);
  }

  render() {
    return (
      <div>
        <ul>
          <li>tour</li>
          <li>music</li>
          <li>photos</li>
          <li>contact</li>
        </ul>

        {this.props.children}
      </div>
    );
  }
}

export default withRouter(Header);
