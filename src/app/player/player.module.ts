import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ControlsComponent } from './controls/controls.component';
import { PlayerStoreService } from './player.store.service';

@NgModule({
  declarations: [
    PlayerComponent,
    ControlsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AngularSvgIconModule.forRoot()
  ],
  providers: [PlayerStoreService]
})
export class PlayerModule { }
