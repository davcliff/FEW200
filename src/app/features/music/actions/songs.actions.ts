import { createAction, props } from '@ngrx/store';
import { SongEntity } from '../reducers/songs.reducer';

export const loadSongs = createAction(
  '[music songs] load the songs from the api'
);

export const loadSongsSucceeded = createAction(
  '[music songs] loading the songs succeeded',
  props<{ payload: SongEntity[] }>()
);

let tempId = 1;
export const songAdded = createAction(
  '[music songs] song added',
  ({ title, artist, album, year }: { title: string, artist: string, album: string, year: number }) => ({
    payload: {
      title, artist, album, year, id: 'T' + tempId++
    } as SongEntity
  })
);

export const songAddedSuccessfully = createAction(
  '[music songs] song added successfully',
  props<{ oldId: string, payload: SongEntity }>()
);

export const songAddedFailure = createAction(
  '[music songs] song added failure',
  props<{ errorMessage: string, payload: SongEntity }>()
);

