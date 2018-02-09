import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  static selectMusic() {
    const selectedMusic = "chopin-spring";
    return selectedMusic;
  }

  constructor(props) {
    super(props);
    this.state = {
      currentMusic: App.selectMusic()
    }
  }

  render() {
    return (
      <div className="App"
        style={{backgroundImage: "url(background/" + this.state.currentMusic + ".jpg)"}}>
      </div>
    );
  }
}

export default App;
