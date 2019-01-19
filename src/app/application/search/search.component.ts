import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Application } from './../../application';
import { Component, OnInit, ViewChild } from '@angular/core';

const apps: Application[] = [
  { id: '123456', name: 'Test1', bots: 100, guilds: 150 },
  { id: '123456', name: 'Test2', bots: 100, guilds: 150 }
];

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  displayedColumns: String[] = ['name', 'bots', 'guilds'];
  dataSource: MatTableDataSource<Application> = new MatTableDataSource<Application>(apps);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

}
