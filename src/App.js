import React, { Component } from 'react';
import './App.css';
import Playlist from './Playlist';
import Song from './Song' ;
import Songs from './songs.json';

class App extends Component {

  static get MODE() {
    return {
      SONG: "SONG",
      PLAYLIST: "PLAYLIST"
    };
  }

  static selectAnyMusic() {
    return Songs[Math.floor(Math.random() * Songs.length)];
  }

  static getDuration(music) {
    return 1;
  }

  constructor(props) {
    super(props);
    const music = this.selectMusic();
    this.state = {
      currentMusic: music,
      mode: App.MODE.SONG,
      isPlaying: false,
      currentTime: 0,
      duration: App.getDuration(music),
    };
    this.selectMusic = this.selectMusic.bind(this);
    this.changeMusic = this.changeMusic.bind(this);
    this.setMode = this.setMode.bind(this);
    this.setModeToPlaylist = this.setModeToPlaylist.bind(this);
  }

  selectMusic() {
    if (!this.state || !this.state.currentMusic) { // first time
      console.log("--")
      return App.selectAnyMusic();
    } else { // next time do not repeat
      console.log("originally", this.state.currentMusic.fileName);
      let randomSong;
      do {
        randomSong = App.selectAnyMusic();
        console.log(randomSong.fileName)
      } while (randomSong.fileName !== this.state.currentMusic.fileName)
      return randomSong;
    }

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
      view = <Song  title={this.state.currentMusic.title}
                    author={this.state.currentMusic.author}
                    time={this.state.currentTime}
                    currentTime="00:00"
                    progress="0.25"
                    changeMode={this.setModeToPlaylist}/>
    } else {
      view = <Playlist/>
    }
    return (
      <div className="App"
        style={{backgroundImage: "url(background/" + this.state.currentMusic.fileName + ".jpg)"}}>
        {view}
        <audio id="musicPlayer" preload="true">
          <source src={"music/" + this.state.currentMusic.fileName + ".mp3"} type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default App;
