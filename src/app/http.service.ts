import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor() { }

  public url(route: string): string {
    const https: string = environment.https ? 'https://' : 'http://';
    const hostname: string = environment.hostname;
    const port: number = environment.port;
    return https + hostname + ':' + port + '/api/' + route;
  }
}
