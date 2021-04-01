import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatTooltipModule } from '@angular/material/tooltip';
import {MatCardModule} from '@angular/material/card';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule
  ],
  exports: [
    MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatTooltipModule, MatCardModule
  ]
})
export class MaterialModule { }
