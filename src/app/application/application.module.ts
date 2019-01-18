import { MatDividerModule } from '@angular/material/divider';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { DetailComponent } from './detail/detail.component';
import { RouterModule, Routes } from '@angular/router';
import { MatInputModule } from '@angular/material/input';

const routes: Routes = [
  { path: '', component: SearchComponent },
  { path: 'info', component: DetailComponent }
];

@NgModule({
  declarations: [SearchComponent, DetailComponent],
  imports: [
    CommonModule,
    MatInputModule,
    MatFormFieldModule,
    MatTableModule,
    MatPaginatorModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class ApplicationModule { }
