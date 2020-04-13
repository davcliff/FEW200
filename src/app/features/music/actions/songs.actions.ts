import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

export const loadSongs = createAction(
  '[music songs] load the songs from the api'
);

export const loadSongsSucceeded = createAction(
  '[music songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);


// todo: Create one we dispatch if the API call failed
