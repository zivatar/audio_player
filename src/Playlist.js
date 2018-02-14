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
      <svg className="line-progress" viewBox="0 0 100 100">
        <path className="path2" fill="#01a09e"
        strokeWidth="3" stroke="#01a09e" d="M 0 50 l 100 50"/>
      </svg>
      <p onClick={props.changeMode} className="pointer">×</p>
      {songs}
    </div>
  );
}
