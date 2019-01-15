import { HttpService } from './../../http.service';
import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InformationComponent } from '../information/information.component';

class ApplicationInformation {
  public id: string;
  public name: string;
  public secret: string;
}

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {
  loading: boolean;
  info: InformationComponent;

  constructor(
    private httpService: HttpService,
    private httpClient: HttpClient
  ) {}

  ngOnInit() {
    const url: string = this.httpService.url('app/info');
    this.httpClient.get(url).subscribe((data: ApplicationInformation) => {
      
    });
  }

}
