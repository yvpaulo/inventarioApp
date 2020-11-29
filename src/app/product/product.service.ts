import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


export class PackageProduct{
   name: string;
   quant: number;
   constructor(name?: string, quant?: number){
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
packaging3?: PackageProduct;

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
    cod:'0001.00001.0020PA',
    name: 'CIMENTCOLA INT CINZA AC1 20KG PA',
    active: true,
    countDate: new Date(),
    unity: 'Kg',
    quant: 0,
    packaging1: new PackageProduct('Saco', 20),
    packaging2: new PackageProduct('Palete de plástico', 1980),
    packaging3: new PackageProduct('Palete de Papel', 1060),
    },
    {
      id: generateId(),
      cod: '0069.00001.0020PA',
      name: 'CIMENTCOLA FLEXIVEL AC3 CINZA 20KG PA',
      active: true,
      countDate: new Date(),
      unity: 'Kg',
      quant: 10,
      packaging1: new PackageProduct('Saco', 20),
      packaging2: new PackageProduct('Palete de plástico', 1980),
      packaging3: new PackageProduct('Palete de Papel', 1060),
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
      this.products$.next(this.products);
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
