import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';

import {MatPaginatorModule} from '@angular/material/paginator';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatButtonModule} from '@angular/material/button';
import {MatMenuModule} from '@angular/material/menu';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { HomeComponent } from './home/home.component';
/* import { CustonTableComponent } from './shared/custon-table/custon-table.component'; */
import { CustonToolbarComponent } from './custon-toolbar/custon-toolbar.component';
/* import { ClarityModule } from '@clr/angular'; */
/* import { ProductsComponent } from './products/products.component'; */
/* import { DeleteProductModalComponent } from './delete-product-modal/delete-product-modal.component'; */
/* import { ProductFormComponent } from './product-form/product-form.component'; */
/* import { ProductsComponent } from './product/products/products.component'; */
import { ProductModule } from './product/product.module';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
/*     CustonTableComponent, */
    CustonToolbarComponent,
    /* ProductsComponent, */
   /*  DeleteProductModalComponent, */
    /* ProductFormComponent, */


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    MatTableModule,
    MatIconModule,
    MatToolbarModule,
    MatPaginatorModule,
    MatFormFieldModule,
    MatButtonModule,
    MatMenuModule,
   /*  ClarityModule, */

    ReactiveFormsModule,


    ProductModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
