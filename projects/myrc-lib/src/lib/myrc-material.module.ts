import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  MatIconModule,
  MatSnackBarModule,
  MatDialogModule,
  MatProgressSpinnerModule,
  MatTooltipModule
} from '@angular/material';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ],
  exports: [
    MatIconModule,
    MatSnackBarModule,
    MatDialogModule,
    MatProgressSpinnerModule,
    MatTooltipModule
  ]
})
export class MyrcMaterialModule { }
