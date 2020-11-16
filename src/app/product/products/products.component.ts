import { Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
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
  counting = false;
  productToBeDeleted;
  productToBeCounted;
  selectedProduct: IProduct;
  productOpen: boolean;
  constructor(private productsService: ProductsService) {
    this.totalQuant = 0;
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
  onCount(product) {
    this.counting = true;
    this.onEdit(product);
}

  onEdit(product) {

    this.productOpen = true;
    this.selectedProduct = product;
    }

  addTotal(quant){
  this.totalQuant=this.totalQuant+quant;
  }

  handleFinish(event) {

    if (event && event.product) {
        if (this.selectedProduct) {
            // Edit Flow
            this.productsService.editProduct(this.selectedProduct.id, event.product);
        } else {
            // Save New
            this.productsService.addProduct(event.product);
        }
    }
    this.productOpen = false;
    this.counting = false;
}
}
