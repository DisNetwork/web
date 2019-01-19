import { Application } from './../../application';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  displayedColumns: string[] = ['name', 'healthy'];
  dataSource: MatTableDataSource<Application>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor() {
    const apps: Application[] = [
      { id: '213112', name: 'App1', healthy: true, bots: 100, guilds: 150 },
      { id: '213142', name: 'App2', healthy: false, bots: 100, guilds: 150 },
      { id: '213114', name: 'App3', healthy: true, bots: 100, guilds: 150 }
    ];
    this.dataSource = new MatTableDataSource(apps);
  }

  ngOnInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(value: string) {
    this.dataSource.filter = value.trim().toLowerCase();
    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
