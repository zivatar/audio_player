import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Playlist from './Playlist';
import Song from './Song' ;

class App extends Component {

  static get MODE() {
    return {
      SONG: "SONG",
      MENU: "MENU"
    };
  }

  static selectMusic() {
    const selectedMusic = "chopin-spring";
    return selectedMusic;
  }

  constructor(props) {
    super(props);
    this.state = {
      currentMusic: App.selectMusic(),
      mode: App.MODE.SONG,
    }
  }

  render() {
    let content;
    if (this.state.mode === App.MODE.SONG) {
      content = <Song/>
    } else {
      content = <Playlist/>
    }
    return (
      <div className="App"
        style={{backgroundImage: "url(background/" + this.state.currentMusic + ".jpg)"}}>
        {content}
      </div>
    );
  }
}

export default App;
