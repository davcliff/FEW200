import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { SongListItemModel } from '../../models';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ListComponent implements OnInit {

  @Input() model: SongListItemModel[] = [];
  /* model: SongListItemModel[] = [
    { id: '1', title: 'Happy Birthday', artist: 'Smith', year: 1833, album: 'All Time Favorites' },
    { id: '2', title: 'Row Row Row Your Boat', artist: 'Traditional', year: 1683, album: 'Some old 78 you found' }
  ]; */

  constructor() { }

  ngOnInit(): void {
  }

}
