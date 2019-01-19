import { MatPaginator } from '@angular/material/paginator';
import { Bot } from './../../bot';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';

const bots: Bot[] = [
  { id: '1', name: 'Bot 1', app: 'HD' },
  { id: '2', name: 'Bot 2', app: 'HD' }
];

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: String[] = ['name', 'app'];
  dataSource: MatTableDataSource<Bot> = new MatTableDataSource<Bot>(bots);
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor() { }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(filter: string) {
    this.dataSource.filter = filter.trim().toLowerCase();
  }

}
