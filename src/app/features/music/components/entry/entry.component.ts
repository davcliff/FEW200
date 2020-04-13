import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MusicState } from '../../reducers';
import { Store } from '@ngrx/store';
import { songAdded } from '../../actions/songs.actions';

@Component({
  selector: 'app-entry',
  templateUrl: './entry.component.html',
  styleUrls: ['./entry.component.scss']
})
export class EntryComponent implements OnInit {

  songForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private store: Store<MusicState>) { }

  ngOnInit(): void {
    this.songForm = this.formBuilder.group({
      title: ['', [Validators.required, Validators.maxLength(30)]],
      artist: ['', [Validators.required]],
      album: ['', [Validators.required, Validators.maxLength(50)]],
      year: [2020, [Validators.required, Validators.min(1853), Validators.max(2023)]]
    });
  }

  get title() { return this.songForm.get('title'); }

  submit() {
    this.store.dispatch(songAdded({ ...this.songForm.value }));
    this.songForm.reset();
  }

}
