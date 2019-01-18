import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-source-code',
  templateUrl: './source-code.component.html',
  styleUrls: ['./source-code.component.css']
})
export class SourceCodeComponent implements OnInit {
  type: 'open' | 'closed' = 'open';
  fileUrl: String = '';

  constructor() { }

  ngOnInit() {
  }

}
