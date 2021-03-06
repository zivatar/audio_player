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
          <p>
            <span className="song-current-time">{props.currentTime}</span>
          </p>
          <p>
            <span className="song-title">{props.title}</span>
            <br/>
            <span className="song-author">{props.author}</span>
          </p>
        </div>
      </div>
      <img className="player-control top-middle" src="icons/playlist.svg"
      onClick={props.changeMode} alt="Playlist"/>
      <img className="player-control bottom-middle" src="icons/playpause.svg"
      alt="Play/pause" onClick={props.onPlayBtn}/>
      <img className="player-control left-middle" src="icons/prev.svg"
      alt="Previous song" onClick={props.onPrevBtn}/>
      <img className="player-control right-middle" src="icons/next.svg"
      alt="Next song" onClick={props.onNextBtn}/>
    </div>
  );
}
