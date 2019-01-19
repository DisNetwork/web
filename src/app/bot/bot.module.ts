import { FormsModule } from '@angular/forms';
import { MatDividerModule } from '@angular/material/divider';
import { MatSelectModule } from '@angular/material/select';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTableModule } from '@angular/material/table';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { InfoComponent } from './info/info.component';
import { DetailComponent } from './detail/detail.component';
import { MatTabsModule } from '@angular/material/tabs';
import { ActivityComponent } from './activity/activity.component';
import { SettingsComponent } from './settings/settings.component';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'info', component: DetailComponent }
];

@NgModule({
  declarations: [ListComponent, InfoComponent, DetailComponent, ActivityComponent, SettingsComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatPaginatorModule,
    MatTabsModule,
    MatSelectModule,
    MatDividerModule,
    RouterModule.forChild(routes)
  ]
})
export class BotModule { }
