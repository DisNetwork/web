import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  access_token: String = 'XXXX-XXXXXXXXXXX';
  access_token_read_only: Boolean = true;

  constructor() { }

  ngOnInit() {
  }

  editAccessToken() {
    this.access_token_read_only = false;
  }

  postAccessToken() {
    this.access_token_read_only = true;
  }

  clearAccessToken() {
    this.access_token_read_only = true;
  }

}
