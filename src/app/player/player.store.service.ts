import { Injectable } from '@angular/core';
import { songs } from 'src/mock-data/songs';
import { Subject, interval } from 'rxjs';


@Injectable()
export class PlayerStoreService {
    public songChanged = new Subject();
    public currentSong: SongProgress = {
        percentage: 0,
        seconds: 0,
        currentTime: '00:00',
        currentLength: '00:00',
        currentSong: undefined,
        status: 'pause'
    };

    public songs = songs;
    private time: any;
    private refreshTime = 1; // 10 ms

    public playSong(song) {
        this.currentSong.status = 'play';
        this.currentSong.percentage = 0;
        this.currentSong.seconds = 0;
        this.currentSong.currentSong = song;
        this.currentSong.currentLength = this.secondsToText(song.length);
        this.time = interval(this.refreshTime).subscribe(() => this.updateProgress());
    }

    private updateProgress() {
        this.currentSong.seconds += (this.refreshTime / 200);
        this.currentSong.percentage = (this.currentSong.seconds / this.currentSong.currentSong.length) * 100;
        this.currentSong.currentTime = this.secondsToText(Math.floor(this.currentSong.seconds));
    }

    private secondsToText(value) {
        const minutes: number = Math.floor(value / 60);
        const seconds = (value - minutes * 60).toString();
        return `${minutes}:${(seconds.length === 1) ? '0' + seconds : seconds}`;
    }
}

export interface SongProgress {
    percentage: number;
    seconds: number;
    currentTime: string;
    currentLength: string;
    currentSong: any;
    status: 'play' | 'pause';
}
