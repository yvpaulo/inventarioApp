import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ProductsComponent} from './products/products.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {DeleteProductModalComponent} from './delete-product-modal/delete-product-modal.component';
import { ReactiveFormsModule } from '@angular/forms';

import { ClarityModule } from '@clr/angular';
/* import {MatIconModule} from '@angular/material/icon'; */
import {SharedModule} from '../shared/shared.module';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';



@NgModule({
  declarations: [ProductsComponent,
    ProductFormComponent,
    DeleteProductModalComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
    ReactiveFormsModule
    /* SharedModule, */
  ],
   exports: [ProductsComponent,
    ProductFormComponent,
    DeleteProductModalComponent
  ]
})
export class ProductModule { }
