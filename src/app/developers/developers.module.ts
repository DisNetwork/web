import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';

const routers: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [NavbarComponent, MainComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    RouterModule.forChild(routers)
  ]
})
export class DevelopersModule { }
