import React, { Component } from 'react';
import './App.css';
import Playlist from './Playlist';
import Song from './Song' ;
import Songs from './songs.json';
import AudioPlayer from './AudioPlayer';

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

  constructor(props) {
    super(props);
    const music = this.selectMusic();
    this.state = {
      currentMusic: music,
      mode: App.MODE.SONG,
      isPlaying: false,
      currentTime: "00:00",
      progress: 0,
    };
    this.audioPlayer = new AudioPlayer();
    this.selectMusic = this.selectMusic.bind(this);
    this.changeMusic = this.changeMusic.bind(this);
    this.setMode = this.setMode.bind(this);
    this.setModeToPlaylist = this.setModeToPlaylist.bind(this);
    this.setModeToSong = this.setModeToSong.bind(this);
    this.setMusic = this.setMusic.bind(this);
  }

  componentDidMount() {
    this.audioPlayer.setRef(this.refs.audioPlayer);
    this.interval = setInterval( () => {
      this.setState({
        currentTime: this.audioPlayer.getCurrentTime(),
        duration: this.audioPlayer.getDuration(),
        progress: this.audioPlayer.getProgress()
      })
    }, 500)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  _getCurrentMusicIndex() {
    for (let i = 0; i < Songs.length; i++) {
      if (Songs[i].fileName === this.state.currentMusic.fileName) {
        return i;
      }
    }
  }

  getNextMusic() {
    return Songs[(this._getCurrentMusicIndex()+1)%Songs.length];
  }

  getPreviousMusic() {
    return Songs[(this._getCurrentMusicIndex()-1)%Songs.length];
  }

  // randomly select a music
  selectMusic() {
    if (!this.state || !this.state.currentMusic) { // first time
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

  setMusic(music) {
    this.setState({
      currentMusic: music,
      currentTime: "00:00",
      progress: 0,
    });
  }

  setMode(mode) {
    this.setState({
      mode: mode
    })
  }

  setModeToPlaylist() {
    this.setMode(App.MODE.PLAYLIST);
  }

  setModeToSong() {
    this.setMode(App.MODE.SONG);
  }

  changeMusic() {
    const music = App.selectMusic();
    this.setState({
      currentMusic: music,
    })
  }

  render() {
    let view;
    if (this.state.mode === App.MODE.SONG) {
      view = <Song  title={this.state.currentMusic.title}
            author={this.state.currentMusic.author}
            currentTime={this.state.currentTime}
            progress={this.state.progress}
            changeMode={this.setModeToPlaylist}
            onPlayBtn={() => this.audioPlayer.playOrPause()}
            onNextBtn={() => this.setMusic(this.getNextMusic())}
            onPrevBtn={() => this.setMusic(this.getPreviousMusic())}
                    />
    } else {
      view = <Playlist
                songs={Songs}
                changeMode={this.setModeToSong}
                setMusic={music => this.setMusic(music)}
                />
    }

    return (
      <div className="full">
      <div id="main" className="App full">
        {view}
        <audio id="audioPlayer" ref="audioPlayer" preload="true">
          <source src={"music/" + this.state.currentMusic.fileName + ".mp3"}
          type="audio/mpeg" />
        </audio>
      </div>
      <div className="full App-bg"
      style={{backgroundImage: "url(background/" +
      this.state.currentMusic.fileName + ".jpg)"}}>

      </div>
      </div>
    );
  }
}

export default App;
