import { MatToolbarModule } from '@angular/material/toolbar';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainComponent } from './main/main.component';
import { Routes, RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { InformationComponent } from './information/information.component';
import { OpenSourceComponent } from './open-source/open-source.component';
import { MatButtonModule } from '@angular/material/button';
import { HttpClientModule } from '@angular/common/http';

const routers: Routes = [
  { path: '', component: MainComponent }
];

@NgModule({
  declarations: [NavbarComponent, MainComponent, InformationComponent, OpenSourceComponent],
  imports: [
    CommonModule,
    HttpClientModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    RouterModule.forChild(routers)
  ]
})
export class DevelopersModule { }
