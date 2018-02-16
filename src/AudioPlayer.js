import moment from 'moment';

class AudioPlayer {

  setRef(domElement) {
    this.domElement = domElement;
  }

  getDuration() {
    if (!!this.domElement) return this.domElement.duration;
  }

  getProgress() {
    if (!!this.domElement && !!this.domElement.duration) {
      return this.domElement.currentTime / this.domElement.duration;
    } else {
      return 0;
    }
  }

  getCurrentTime() {
    if (!!this.domElement) {
      const duration = moment.utc(this.domElement.currentTime * 1000)
      .format("mm:ss")
      return duration;
    }
  }

  play() {
    this.domElement.play();
  }

  pause() {
    this.domElement.pause();
  }

  playOrPause() {
    if (this.domElement.paused) {
      this.domElement.play();
    } else {
      this.domElement.pause();
    }
  }
}

export default AudioPlayer;
