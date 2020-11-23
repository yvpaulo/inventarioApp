import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class PackageProduct{
   name: string;
   quant: number;
   constructor({name, quant}){
     this.name = name;
     this.quant = quant;
   }
}

export interface IProduct {
id: number;
cod: string;
name: string;
active: boolean;
countDate: Date;
unity: string;
quant: number;
packaging1?: PackageProduct;
packaging2?: PackageProduct;
}
function generateId() {
return Math.floor(Math.random() * 10000);
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  products: IProduct[] = [{
    id: generateId(),
    cod:'xpto1',
    name: 'cimento externo',
    active: true,
    countDate: new Date(),
    unity: 'kg',
    quant: 0,
    packaging1: new PackageProduct({name: 'saco', quant: 1000}),
    packaging2: new PackageProduct({name: 'palete', quant: 10000}),
    },
    {
      id: generateId(),
      cod:'xpto2',
      name: 'cimento interno',
      active: true,
      countDate: new Date(),
      unity: 'kg',
      quant: 10,
      packaging1: new PackageProduct({name: 'saco', quant: 1000}),
      packaging2: new PackageProduct({name: 'palete', quant: 10000}),
      },

    ];
    products$ = new BehaviorSubject<IProduct[]>(this.products);

  constructor() { }

  removeProduct(product) {
    const index = this.products.indexOf(product);
    this.products = [
    ...this.products.slice(0, index),
    ...this.products.slice(index + 1),
    ];
    this.products$.next(this.products);
    }
    addProduct(product) {
      this.products = [
          {
              id: generateId(),
              ...product,
          },
          ...this.products,
      ];
      this.products$.next(this.products)
  }

  editProduct(id, product) {
      const index = this.products.findIndex(p => p.id === id);
      this.products = [
          ...this.products.slice(0, index),
          {
              id,
              ...product,
          },
          ...this.products.slice(index + 1),
      ];
      this.products$.next(this.products);
  }
}
