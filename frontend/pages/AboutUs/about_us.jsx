import React from 'react';

import './about_us.scss';

class AboutUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={'aboutUsWrapper'}>
        <h1 className={'aboutUsHeader'}>ABOUT US</h1>

        <div className={'aboutUsBody'}>
          <p>
            Risen from the ashes of keg-fueled house parties and sweaty bars of College Park, MD, Box Era has
            planted itself as a staple in the up-and-coming DMV music scene. Creating a jam-inspired electro-pop
            and funk blend, Box Era’s music arms you with every tool necessary to go talk to that special
            someone you’ve been eyeing up. You’ll find yourself dancing the night away, shaking hands with
            CEOs, and experiencing the juiciest sweet-and-sour jamwich of your life.
          </p>

          <p>
            With a debut EP right round the corner, Box Era is gearing up for an explosive 2017. From word of
            mouth alone, the band has already supported national headliners and conquered renowned venues
            across the region. The party is only going to grow. There’s a saxophone, a talkbox, and two pairs of
            glasses. There’s magic, youth, and the most unique sound you’ve heard since The Bangles. Box Era
            is the story of five boys wandering the halls of Xanadu, forever in search of sweet cream.
          </p>
        </div>

      </div>
    );
  }
}

export default AboutUs;
