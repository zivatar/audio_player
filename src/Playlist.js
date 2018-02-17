import React from 'react';
import './Playlist.css';

export default function Playlist(props) {
  const songs = props.songs.map(song => (
    <p onClick={() => {
      props.setMusic(song);
      props.changeMode();
    }}
    className="pointer song-in-list" key={song.fileName}>
      <span classNAme="song-title">{song.title}</span>
      <br/>
      <span className="song-author">{song.author}</span>
    </p>
  ))
  return (
    <div id="playlist" className="middle">
      <svg className="line-progress">
        <line x1="0%" y1="50%" x2="100%" y2="50%"></line>
        <line className="progress" x1="0%" y1="50%"
        x2={""+(props.progress*100)+"%"} y2="50%"></line>
      </svg>
      <p className="back-btn">
      <img className="pointer" src="icons/close.svg"
      alt="Back to song" onClick={props.changeMode}/>
      </p>
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
