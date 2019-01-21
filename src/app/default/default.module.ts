import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule, Routes } from '@angular/router';
import { PartnersComponent } from './partners/partners.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'partners', component: PartnersComponent }
];

@NgModule({
  declarations: [HomeComponent, PartnersComponent],
  imports: [
    CommonModule,
    MatToolbarModule,
    MatButtonModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class DefaultModule { }
