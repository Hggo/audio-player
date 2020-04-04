import { Component } from '@angular/core';
import { songs } from 'src/mock-data/songs';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent {

  public currentSong = {
    percentage: 0,
    seconds: 0,
    currentTime: '00:00',
    currentLength: '00:00',
    currentSong: undefined
  };

  public songs = songs;

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
