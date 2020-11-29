import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';


import { HeaderComponent } from './header/header.component';
import { CustonTableComponent } from './custon-table/custon-table.component';

@NgModule({
  declarations: [HeaderComponent, CustonTableComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule
  ],
  exports: [HeaderComponent,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule,
    CustonTableComponent

  ]
})
export class SharedModule { }

