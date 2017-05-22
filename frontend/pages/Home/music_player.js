import React from 'react';

const Track = ({ track, trackToggle }) => {
  const handleClick = () => {
    trackToggle(track.url);
  }

  return (
    <div className='track' onClick={ handleClick }>
      {track.name}
    </div>
  )
}

const Album = ({ album, trackToggle }) => (
  <div className='album'>
    <img className='album-cover' src={album.album_cover} />
    <div className='tracks-container'>
      {album.tracks.map((track, idx) => (
        <Track key={'track' + idx} track={track} trackToggle={trackToggle} />
      ))}
    </div>
  </div>
);

const MusicPlayer = ({ music, trackToggle }) => (
  <div className='music-player-container'>
    {(music) ? (
      <div className='albums-container'>
        {music.map((album, idx) => (
          <Album key={'album' + idx}
            album={album}
            trackToggle={trackToggle}
          />
        ))}
      </div>
    ) : (
      <div></div>
    )}
  </div>
);

export default MusicPlayer;
