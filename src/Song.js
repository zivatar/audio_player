import React from 'react';
import './Song.css';

export default function Song(props) {
  const dashArray = 2 * Math.PI * 50;
  const dashOffset = dashArray * (1 - props.progress);
  return (
    <div id="song" className="middle">
      <svg className="circle-progress" viewBox="0 0 100 100">
        <circle className="base" cx="50" cy="50" r="49" />
        <circle className="value" cx="50" cy="50" r="49"
        strokeDasharray={dashArray} strokeDashoffset={dashOffset}/>
      </svg>
      <div id="song-inner" className="middle">
        <div className="middle full-width">
          <p className="song-current-time">{props.currentTime}</p>
          <p className="song-title">{props.title}</p>
          <p className="song-author">{props.author}</p>
        </div>
      </div>
      <img className="player-control top-middle" src="icons/playlist.svg"
      onClick={props.changeMode}/>
      <img className="player-control bottom-middle" src="icons/playpause.svg"/>
      <img className="player-control left-middle" src="icons/prev.svg"/>
      <img className="player-control right-middle" src="icons/next.svg"/>
    </div>
  );
}
