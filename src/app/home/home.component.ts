import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public currentSong = {
    percentage: 0,
    seconds: 0,
    currentTime: '00:00',
    currentLength: '00:00',
    currentSong: undefined
  };

  public songs = [{
    title: 'I am the Highway',
    artist: 'Audioslave',
    length: 180
  }, {
    title: 'One',
    artist: 'Metallica',
    length: 230
  }, {
    title: 'The Unforgiven',
    artist: 'Metallica',
    length: 130
  }];

  constructor() {

  }

  public playSong(song) {
    this.currentSong.percentage = 0;
    this.currentSong.seconds = 0;
    this.currentSong.currentSong = song;
    this.currentSong.currentLength = this.secondsToText(song.length);
    setInterval(() => this.updateProgress(), 10);
  }

  private updateProgress() {
    this.currentSong.seconds += 0.01;
    this.currentSong.currentTime = this.secondsToText(Math.floor(this.currentSong.seconds));
    this.currentSong.percentage = (this.currentSong.seconds / this.currentSong.currentSong.length) * 100;
  }

  private secondsToText(value) {
    const minutes: number = Math.floor(value / 60);
    const seconds = (value - minutes * 60).toString();
    return `${minutes}:${(seconds.length === 1) ? '0' + seconds : seconds}`;
  }
}
