import React from 'react';

// components
import MusicPlayer from './music_player';

// actions
import * as Util from '../actions/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: null
    };
  }

  componentWillMount() {
    Util.getMusic().then((music) => {
      this.setState(music);
    });
  }

  render() {
    return(
      <div>
        <h1>HOME</h1>
        <MusicPlayer music={this.state.music}/>
      </div>
    );
  }
}

export default Home;
