import React from 'react';
import { bindAll } from 'lodash';

// components
import MusicPlayer from './music_player';
import ReactPlayer from 'react-player';

// actions
import * as Util from '../../actions/actions';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: null,
      playing: false,
      url: ''
    };

    bindAll(this, 'handleTrackToggle', 'play', 'pause');
  }

  componentWillMount() {
    Util.getMusic().then((music) => {
      this.setState(music);
    });
  }

  handleTrackToggle(url) {
    if (url === this.state.url && this.state.playing) {
      this.pause();
    } else {
      this.play(url);
    }
  }

  play(url) {
    if (this.state.url !== url) {
      this.setState({
        playing: true,
        url: url
      });
    } else {
      this.setState({playing: true});
    }
  }

  pause() {
    this.setState({playing: false});
  }

  render() {
    let state = this.state;
    return(
      <div>
        <h1>HOME</h1>
        <MusicPlayer
          music={state.music}
          trackToggle={this.handleTrackToggle}
        />
        <ReactPlayer
          url={state.url}
          playing={state.playing}
        />
      </div>
    );
  }
}

export default Home;
