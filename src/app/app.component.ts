import { Component } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DisNetwork';
  buttons: any[] = [
    { name: 'Home', route: 'home'},
    { name: 'Bots', route: 'bots'},
    { name: 'Applications', route: 'apps' },
    { name: 'Developers', route: 'devs'},
    { name: 'Subscriptions', route: 'subs'},
    { name: 'Documention', route: 'docs'}
  ];

  public constructor(
    private router: Router
  ) {}

  onClick(route: string) {
    this.router.navigate([route]);
  }
}
