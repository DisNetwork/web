import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-activity',
  templateUrl: './activity.component.html',
  styleUrls: ['./activity.component.css']
})
export class ActivityComponent implements OnInit {
  game: String = '';
  type: 'play' | 'listen' | 'stream' | 'watch' = 'play';
  status: 'online' | 'dnd' | 'idle' | 'invisible' = 'online';

  constructor() { }

  ngOnInit() {
  }

}
