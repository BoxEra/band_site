import React from 'react';

import './follow_us.scss';

class FollowUs extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className={'followUsWrapper'}>
        <h1>FOLLOW US</h1>
        <div className={'iconsWrapper'}>
          <a href={'https://www.instagram.com/boxeramusic/'} className={'iconWrapper'}>
            <img className={'defaultIcon'} src={'https://s3.amazonaws.com/boxera/icons/instagram.png'}/>
            <img className={'hoverIcon'} src={'https://s3.amazonaws.com/boxera/icons/instagram_hover.png'}/>
          </a>
          <a href={'https://soundcloud.com/boxeramusic'} className={'iconWrapper'}>
            <img className={'defaultIcon'} src={'https://s3.amazonaws.com/boxera/icons/soundcloud.png'}/>
            <img className={'hoverIcon'} src={'https://s3.amazonaws.com/boxera/icons/soundcloud_hover.png'}/>
          </a>
          <a href={'https://www.facebook.com/boxeramusic/'} className={'iconWrapper'}>
            <img className={'defaultIcon'} src={'https://s3.amazonaws.com/boxera/icons/facebook.png'}/>
            <img className={'hoverIcon'} src={'https://s3.amazonaws.com/boxera/icons/facebook_hover.png'}/>
          </a>
        </div>

        <img className={'planet1'} src={'https://s3.amazonaws.com/boxera/space_imgs/exoplanet1.png'}></img>
        <img className={'planet2'} src={'https://s3.amazonaws.com/boxera/space_imgs/exoplanet2.png'}></img>
      </div>
    );
  }
}

export default FollowUs;
