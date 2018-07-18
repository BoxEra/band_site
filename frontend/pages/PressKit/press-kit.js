import React from 'react';

import './press-kit.scss';

class Photos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={'pressKitWrapper'}>
        <div className={'pressKitBody'}>
          <div className={'pressKitHeader'}>
            <h1>BIO</h1>
          </div>
          <p>
            Risen from the ashes of keg-fueled house parties and sweaty bars of College Park, MD, Box Era has
            planted itself as a staple in the up-and-coming DMV music scene. Creating a jam-inspired electro-pop
            and funk blend, Box Era’s music arms you with every tool necessary to go talk to that special
            someone you’ve been eyeing up. You’ll find yourself dancing the night away, shaking hands with
            CEOs, and experiencing the juiciest sweet-and-sour jamwich of your life.
          </p>

          <p>
            With a debut EP behind them, Box Era is gearing up for an explosive rise to power. The band has
            supported national headliners and headlined renowned venues up and down the east coast. The
            party is only going to grow. There’s a saxophone, a talkbox, and two pairs of glasses. There’s
            magic, youth, and the most unique sound you’ve heard since The Bangles. Box Era is the story of
            five boys wandering the halls of Xanadu, forever in search of sweet cream.
          </p>

          <hr></hr>

          <div className={'pressKitHeader'}>
            <h1>BLANK ADMAT</h1>
          </div>

          <div className="imagecontainer">
            <img src="./img/box_era_art.jpg" />
            <img src="./img/logo_blk.png" />
            <img src="./img/logo_wht.png" />
            <img src="./img/boxera_graphic.png" />
            <img src="./img/maps_album_cover.jpg" />
          </div>

          <div className={'pressKitHeader'}>
            <h1>PRESS PHOTOS</h1>
          </div>

          <div className="imagecontainer">
            <img src="./img/venue.jpg" />
            <img src="./img/basement.jpg" />
          </div>
        </div>
      </div>
    );
  }
}

export default Photos;
