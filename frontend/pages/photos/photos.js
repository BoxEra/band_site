import React from 'react';

import './photos.scss';

class Photos extends React.Component {
  constructor() {
    super();
  }

  render() {
    return(
      <div className={'photosWrapper'}>
        <h1 className={'photosHeader'}>PHOTOS</h1>

        <div className={'photosBody'}>
        </div>
      </div>
    );
  }
}

export default Photos;
