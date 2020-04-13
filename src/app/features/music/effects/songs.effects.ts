import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Actions, ofType, createEffect } from '@ngrx/effects';

import { environment } from '../../../../environments/environment';
import * as songActions from '../actions/songs.actions';
import { switchMap, map } from 'rxjs/operators';
import { SongEntity } from '../reducers/songs.reducer';
@Injectable()
export class SongsEffects {

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
    , { dispatch: false }
  );

  constructor(private actions$: Actions, private client: HttpClient) { }
}

interface GetSongsResponse {
  data: SongEntity[];
}
