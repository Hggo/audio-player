import { Component } from '@angular/core';
import { songs } from 'src/mock-data/songs';
import { PlayerStoreService } from './player.store.service';

@Component({
  selector: 'app-player',
  templateUrl: './player.component.html',
  styleUrls: ['./player.component.sass']
})
export class PlayerComponent {

  public songs = songs;

  constructor(private store: PlayerStoreService) {

  }

  public playSong(song) {
    this.store.playSong(song);
  }
}
