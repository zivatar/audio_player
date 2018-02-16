import React from 'react';
import './Playlist.css';

export default function Playlist(props) {
  const songs = props.songs.map(song => (
    <p onClick={() => {
      props.setMusic(song);
      props.changeMode();
    }}
    className="pointer" key={song.fileName}>
      <strong>{song.title}</strong>
      <br/>
      {song.author}
    </p>
  ))
  return (
    <div id="playlist" className="middle">
      <svg className="line-progress">
        <line x1="0%" y1="50%" x2="100%" y2="50%"></line>
        <line className="progress" x1="0%" y1="0%"
        x2={""+(props.progress*100)+"%"} y2="0%"></line>
      </svg>
      <p onClick={props.changeMode} className="pointer">×</p>
      <svg className="line-progress">
        <line x1="0%" y1="50%" x2="100%" y2="50%"></line>
      </svg>
      {songs}
      <svg className="line-progress">
        <line x1="0%" y1="50%" x2="100%" y2="50%"></line>
      </svg>
    </div>
  );
}
