import React from 'react';
import './Song.css';

export default function Song(props) {
  const dashArray = 2 * Math.PI * 50;
  const dashOffset = dashArray * (1 - props.progress);
  return (
    <div id="song" className="middle">
      <div id="song-inner" className="middle">

      </div>
      <svg className="circle-progress" viewBox="0 0 100 100">
        <circle className="base" cx="50" cy="50" r="49" />
        <circle className="value" cx="50" cy="50" r="49"
        strokeDasharray={dashArray} strokeDashoffset={dashOffset}/>
      </svg>
    </div>
  );
}
