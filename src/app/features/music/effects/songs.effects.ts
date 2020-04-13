import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { environment } from '../../../../environments/environment';
import * as songActions from '../actions/songs.actions';
import { switchMap, map } from 'rxjs/operators';
import { SongEntity } from '../reducers/songs.reducer';
@Injectable()
export class SongsEffects {

  // songAdded => (send it to the API, wait for a response) =>
  saveSong$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.songAdded),
      switchMap((oa) => this.client.post<SongEntity>(environment.songsUrl, {
        title: oa.payload.title,
        artist: oa.payload.artist,
        album: oa.payload.album,
        year: oa.payload.year
      }).pipe(
        map(result => songActions.songAddedSuccessfully({ oldId: oa.payload.id, payload: result }))
      ))
    ), { dispatch: true }
  );

  loadSongs$ = createEffect(() =>
    this.actions$.pipe(
      ofType(songActions.loadSongs),
      switchMap(() => this.client.get<GetSongsResponse>(environment.songsUrl)
        .pipe(
          map(r => r.data),
          map(payload => songActions.loadSongsSucceeded({ payload }))
        )
      )
    )
    , { dispatch: true }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetSongsResponse {
  data: SongEntity[];
}
