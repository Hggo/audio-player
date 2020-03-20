import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent {

  public songs = [{
    title: 'I am the Highway',
    artist: 'Audioslave',
    length: '180'
  }, {
    title: 'One',
    artist: 'Metallica',
    length: '230'
  }, {
    title: 'The Unforgiven',
    artist: 'Metallica',
    length: '130'
  }];

}
