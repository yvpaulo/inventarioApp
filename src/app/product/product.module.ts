import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClarityModule } from '@clr/angular';

import {SharedModule} from '../shared/shared.module';
import {ProductsComponent} from './products/products.component';
import {ProductFormComponent} from './product-form/product-form.component';
import {DeleteProductModalComponent} from './delete-product-modal/delete-product-modal.component';



@NgModule({
  declarations: [ProductsComponent,
    ProductFormComponent,
    DeleteProductModalComponent
  ],
  imports: [
    CommonModule,
    ClarityModule,
    SharedModule,
  ],
   exports: [ProductsComponent,
    ProductFormComponent,
    DeleteProductModalComponent
  ]
})
export class ProductModule { }
