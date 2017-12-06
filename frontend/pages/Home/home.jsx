import React from 'react';
import { bindAll, reverse } from 'lodash';

// components
import MusicPlayer from './music_player';
import ReactPlayer from 'react-player';
import FollowUs from '../../components/FollowUsBlock/follow_us.jsx';

// actions
import * as Util from '../../actions/actions';

import './home.scss';

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
      this.setState({music: reverse(music.music)});
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
    return (
      <div className={'homeWrapper'}>
        <video width="640px" height="360px" controls>
          <source src="https://s3.amazonaws.com/boxera/BoxEraInStudioLive_Final.mp4" type="video/mp4" />
        </video>
        <iframe className={'homePageVideo'} style={{ width: "640px", height: "360px" }} src={"https://www.youtube.com/embed/nrV_o_R3RS4"} frameBorder={"0"} allowFullScreen></iframe>
        <strong></strong>
        <iframe className={'homePageVideo'} style={{ width: "640px", height: "360px" }} src={"https://www.youtube.com/embed/eVW1qOmTG4I"} frameBorder={"0"} allowFullScreen></iframe>
        <strong>Credit to Brandon Russell and Sheen Radpants Productions</strong>
        <MusicPlayer
          music={state.music}
          trackToggle={this.handleTrackToggle}
          url={state.url}
          playing={state.playing}
        />
        <FollowUs />
        <ReactPlayer
          url={state.url}
          playing={state.playing}
          style={{display: 'none'}}
        />
      </div>
    );
  }
}

export default Home;
