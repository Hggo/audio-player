import { NgModule } from '@angular/core';
import { PlayerComponent } from './player.component';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { ControlsComponent } from './controls/controls.component';

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
  providers: []
})
export class PlayerModule { }
