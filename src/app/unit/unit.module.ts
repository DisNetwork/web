import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WarningComponent } from './warning/warning.component';

@NgModule({
  declarations: [WarningComponent],
  imports: [
    CommonModule,
    MatIconModule,
  ],
  exports: [
    WarningComponent
  ]
})
export class UnitModule { }
