import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/section';

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent implements OnInit {
  displayedColumns: string[] = [ 'name', 'value' ];
  dataSource: Section[] = [
    { name: 'Bots', value: 100 },
    { name: 'Guilds', value: 105 }
  ];

  constructor() { }

  ngOnInit() {
  }

}
