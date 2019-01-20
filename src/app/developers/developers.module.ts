import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { MatInputModule } from '@angular/material/input';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTabsModule } from '@angular/material/tabs';
import { MatSelectModule } from '@angular/material/select';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { ListComponent } from './list/list.component';
import { Routes, RouterModule } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';
import { InformationComponent } from './information/information.component';
import { SourceCodeComponent } from './source-code/source-code.component';
import { FormsModule } from '@angular/forms';
import { TestBotComponent } from './test-bot/test-bot.component';
import { UnitModule } from '../unit/unit.module';

const routes: Routes = [
  { path: '', component: ListComponent },
  { path: 'workspace', component: WorkspaceComponent }
];

@NgModule({
  declarations: [ListComponent, WorkspaceComponent, InformationComponent, SourceCodeComponent, TestBotComponent],
  imports: [
    CommonModule,
    FormsModule,
    UnitModule,
    MatTableModule,
    MatInputModule,
    MatPaginatorModule,
    MatTabsModule,
    MatDividerModule,
    MatSelectModule,
    MatButtonModule,
    MatRadioModule,
    MatFormFieldModule,
    RouterModule.forChild(routes)
  ]
})
export class DevelopersModule { }
