import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bot',
  templateUrl: './test-bot.component.html',
  styleUrls: ['./test-bot.component.css']
})
export class TestBotComponent implements OnInit {
  access_token: String = '';

  constructor() { }

  ngOnInit() {
  }

}
