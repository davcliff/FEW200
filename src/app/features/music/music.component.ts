import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { SongListItemModel } from './models';
import { Store } from '@ngrx/store';
import { MusicState, selectSongListItemModel } from './reducers';

@Component({
  selector: 'app-music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.scss']
})
export class MusicComponent implements OnInit {

  songs$: Observable<SongListItemModel[]>;
  constructor(private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songs$ = this.store.select(selectSongListItemModel);
  }

}
