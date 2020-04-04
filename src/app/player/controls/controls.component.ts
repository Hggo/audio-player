import { Component } from '@angular/core';
import { PlayerStoreService, SongProgress } from '../player.store.service';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.sass']
})
export class ControlsComponent {
  public currentSong: SongProgress;

  constructor(private store: PlayerStoreService) {
    this.store.songChanged.subscribe(() => this.update());
    this.update();
  }

  private update() {
    this.currentSong = this.store.currentSong;
  }
}
