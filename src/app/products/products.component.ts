import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { ProductsService, IProduct } from './../product.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'spa-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProductsComponent implements OnInit {
  products$: Observable<IProduct[]> = this.productsService.products$;
  totalQuant: number;
  delete = false;
  productToBeDeleted;
  selectedProduct: IProduct;
  productOpen: boolean;
  constructor(private productsService: ProductsService) {
    this.totalQuant=0;
  }
  ngOnInit(): void {}

  trackById(index, item) {
    return item.id;
  }


  onDelete(product) {
    this.delete = true;
    this.productToBeDeleted = product;
  }
  handleCancel() {
    this.delete = false;
  }
  confirmDelete() {
    this.handleCancel();
    this.productsService.removeProduct(this.productToBeDeleted);
  }
  addProduct() {
    this.productOpen = true;
    this.selectedProduct = undefined;
}

onEdit(product) {
    this.productOpen = true;
    this.selectedProduct = product;
}

addTotal(quant){
  this.totalQuant=this.totalQuant+quant;
  console.log('aqui total = '+ this.totalQuant);
}

handleFinish(event) {

    if (event && event.product) {
        if (this.selectedProduct) {
            // Edit Flow
            console.log('aqui no handle do editar')
            this.productsService.editProduct(this.selectedProduct.id, event.product);
        } else {
            // Save New
            this.productsService.addProduct(event.product);
            console.log('aqui no handle do editar add')

        }
    }
    this.productOpen = false;
}
}
