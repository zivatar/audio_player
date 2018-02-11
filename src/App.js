import React, { Component } from 'react';
import './App.css';
import Playlist from './Playlist';
import Song from './Song' ;

class App extends Component {

  static get MODE() {
    return {
      SONG: "SONG",
      PLAYLIST: "PLAYLIST"
    };
  }

  static selectMusic() {
    const selectedMusic = "chopin-spring";
    return selectedMusic;
  }

  static getDuration(music) {
    return 1;
  }

  constructor(props) {
    super(props);
    const music = App.selectMusic();
    this.state = {
      currentMusic: music,
      mode: App.MODE.SONG,
      isPlaying: false,
      currentTime: 0,
      duration: App.getDuration(music),
    };
    this.changeMusic = this.changeMusic.bind(this);
    this.setMode = this.setMode.bind(this);
    this.setModeToPlaylist = this.setModeToPlaylist.bind(this);
  }

  setMode(mode) {
    this.setState({
      mode: mode
    })
  }

  setModeToPlaylist() {
    this.setMode(App.MODE.PLAYLIST);
  }

  changeMusic() {
    const music = App.selectMusic();
    this.setState({
      currentMusic: music,
      duration: App.getDuration(music),
    })
  }

  render() {
    let view;
    if (this.state.mode === App.MODE.SONG) {
      view = <Song  title="Polonaise in F sharp minor, Op.44"
                    author="Frederic Chopin"
                    time={this.state.currentTime}
                    currentTime="00:00"
                    progress="0.25"
                    changeMode={this.setModeToPlaylist}/>
    } else {
      view = <Playlist/>
    }
    return (
      <div className="App"
        style={{backgroundImage: "url(background/" + this.state.currentMusic + ".jpg)"}}>
        {view}
        <audio id="musicPlayer" preload="true">
          <source src={"music/" + this.state.currentMusic + ".mp3"} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default App;
