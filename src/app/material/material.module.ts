import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatCardModule } from '@angular/material/card';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { MatMenuModule } from '@angular/material/menu';
import { MatInputModule } from '@angular/material/input';
import { MatDividerModule } from '@angular/material/divider';
import { MatSnackBarModule } from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule,
    MatProgressBarModule, MatMenuModule, MatInputModule, MatSnackBarModule, MatDividerModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule,
    MatProgressBarModule, MatMenuModule, MatInputModule, MatSnackBarModule, MatDividerModule
  ]
})
export class MaterialModule { }
