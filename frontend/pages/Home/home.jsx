import React from "react";
import { bindAll, reverse } from "lodash";

// components
import MusicPlayer from "./music_player";
import ReactPlayer from "react-player";
import FollowUs from "../../components/FollowUsBlock/follow_us.jsx";

// actions
import * as Util from "../../actions/actions";

import "./home.scss";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      music: null,
      playing: false,
      url: ""
    };

    bindAll(this, "handleTrackToggle", "play", "pause");
  }

  componentWillMount() {
    Util.getMusic().then(music => {
      this.setState({ music: reverse(music.music) });
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
      this.setState({ playing: true });
    }
  }

  pause() {
    this.setState({ playing: false });
  }

  render() {
    let state = this.state;
    return (
      <div className={"homeWrapper"}>
        <video
          width="640px"
          height="360px"
          className={"homePageVideo"}
          src={"https://s3.amazonaws.com/boxera/Box+Era+Promo+Edit.mp4"}
          controls
        />
        <MusicPlayer
          music={state.music}
          trackToggle={this.handleTrackToggle}
          url={state.url}
          playing={state.playing}
        />
        <iframe
          id="follow"
          src="https://open.spotify.com/follow/1/?uri=spotify:artist:7MIperBcogvkVTMs2D1XOC"
          height="27"
        />
        <iframe
          className="spotify"
          src="https://open.spotify.com/embed/artist/7MIperBcogvkVTMs2D1XOC"
          width="300"
          height="380"
          frameborder="0"
          allowtransparency="true"
          allow="encrypted-media"
        />
        <FollowUs />
        <ReactPlayer
          url={state.url}
          playing={state.playing}
          style={{ display: "none" }}
        />
      </div>
    );
  }
}

export default Home;
