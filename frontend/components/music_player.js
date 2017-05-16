import React from 'react';

const Track = ({ track }) => (
  <div>
    {track.name}
  </div>
)

const Album = ({ album }) => (
  <div className='album'>
    <img className='album-cover' src={album.album_cover} />
    <div className='tracks-container'>
      {album.tracks.map((track, idx) => (
        <Track key={'track' + idx} track={track} />
      ))}
    </div>
  </div>
);

const MusicPlayer = ({ music }) => (
  <div className='music-player-container'>
    {(music) ? (
      <div className='albums-container'>
        {music.map((album, idx) => (
          <Album key={'album' + idx} album={album} />
        ))}
      </div>
    ) : (
      <div></div>
    )}
  </div>
);

export default MusicPlayer;
