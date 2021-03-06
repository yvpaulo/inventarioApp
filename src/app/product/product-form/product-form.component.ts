/* import { DatePipe } from '@angular/common';
import { ThrowStmt } from '@angular/compiler'; */
import { Component, OnInit, ChangeDetectionStrategy, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ClrWizard } from '@clr/angular';
import {PackageProduct} from '../product.service';
/* import { parseInt } from 'lodash'; */
/* import {pick, result} from 'lodash/'; */

@Component({
  selector: 'spa-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit, OnChanges {

productForm: FormGroup;
@Input() product;
@Input() counting: boolean;
@Output() finish = new EventEmitter();
@ViewChild('productWizard', { static: false }) productWizard: ClrWizard;
newQuant: number;
today = Date.now();
constructor(private fb: FormBuilder) {
this.productForm = this.fb.group({
  basic: fb.group({
  cod: ['', Validators.required],
  name: ['', Validators.required],
  active: true,
  unity: ['', Validators.required],
  quant: 0 /* [{value: 0, disable: true}] */,
  countDate: '',
  newQuant: 0,
  packagingValue: 1,
  packaging1: new PackageProduct('', 0),
  packaging1_name: '',
  packaging1_quant: 0,
  packaging2: new PackageProduct('', 0),
  packaging2_name: '',
  packaging2_quant: 0,
  packaging3: new PackageProduct('', 0),
  packaging3_name: '',
  packaging3_quant: 0,

  }),
});



}

ngOnInit() {
  if (this.product) {

      this.productForm.setValue({
          basic: {
              /* ...pick(this.product, ['name', 'unity', 'active', 'quant', 'countDate']), */
              cod: this.product.cod,
              name: this.product.name,
              unity: this.product.unity,
              active: this.product.active,
              quant: this.product.quant,
              countDate: this.today, //this.product.countDate,
              newQuant: '',
              packagingValue: 1,
             /*  packaging1: this.product.packaging1 ? {name: this.product.packaging1.name,
                           quant: this.product.packaging1.quant} : null, */
              packaging1: this.product.packaging1 ? this.product.packaging1 : new PackageProduct('', 0),
              packaging1_name: this.product.packaging1 ? this.product.packaging1.name : '',
              packaging1_quant: this.product.packaging1 ? this.product.packaging1.quant : 0,

              packaging2: this.product.packaging2 ? this.product.packaging2 : new PackageProduct('', 0),
              packaging2_name: this.product.packaging2.name,
              packaging2_quant: this.product.packaging2.quant,

              packaging3: this.product.packaging3 ? this.product.packaging3 : new PackageProduct('', 0),
              packaging3_name: this.product.packaging3 ? this.product.packaging3.name : '',
              packaging3_quant: this.product.packaging3 ? this.product.packaging3.quant : 0,

          },

      });
     /*  let { name, quant} = this.productForm.get('basic').get('packaging1').value;
      console.log(`name = ${name} Quant ${quant}`); */
  }
}

ngOnChanges() {

   this.ngOnInit();
}
/* get basicFeatures(): FormArray {
  return this.productForm.get('basic.features') as FormArray;
} */

get isBasicInvalid(): boolean {
  return this.productForm.get('basic').invalid;
}

newQuantMetodo(symbol: string): void {
    if (this.newQuant === undefined)
    {
      this.newQuant = this.product.quant;
    }
    const quant = parseFloat(this.productForm.get('basic').get('newQuant').value);
    if (quant + 0)
    {
      if (symbol === '+') {
       this.newQuant += (quant * this.productForm.get('basic').get('packagingValue').value);
      }
      if (symbol === '-') {
        this.newQuant -= (quant * this.productForm.get('basic').get('packagingValue').value);
      }

      this.productForm.get('basic').get('quant').setValue(this.newQuant);
      this.productForm.get('basic').get('newQuant').setValue(0);
    }

    }

  handleClose(): void {
      this.finish.emit();
      this.close();
  }

  close(): void {
      this.productForm.reset();
      this.productWizard.goTo(this.productWizard.pageCollection.pages.first.id);
      this.productWizard.reset();
  }
  // utilizando EventEmitter para enviar os dados cadastrados como um product
  handleFinish() {

    if (this.productForm.get('basic').get('packaging1_name').value !== ''){
        let newPackage = new PackageProduct();
        newPackage.name = this.productForm.get('basic').get('packaging1_name').value;
        newPackage.quant = this.productForm.get('basic').get('packaging1_quant').value;
        this.productForm.get('basic').get('packaging1').setValue(newPackage);

    }

    if (this.productForm.get('basic').get('packaging2_name').value !== ''){
      let newPackage = new PackageProduct();
      newPackage.name = this.productForm.get('basic').get('packaging2_name').value;
      newPackage.quant = this.productForm.get('basic').get('packaging2_quant').value;
      this.productForm.get('basic').get('packaging2').setValue(newPackage);

    }
    if (this.productForm.get('basic').get('packaging3_name').value !== ''){
      let newPackage = new PackageProduct();
      newPackage.name = this.productForm.get('basic').get('packaging3_name').value;
      newPackage.quant = this.productForm.get('basic').get('packaging3_quant').value;
      this.productForm.get('basic').get('packaging3').setValue(newPackage);

  }

    this.finish.emit({

          product: {
                //aqui pego todo o conteúdo preenchido no form referente ao produto
              ...this.productForm.get('basic').value,
              //se tiver outra página posso enviar seu conteudo por aqui
              /* ...this.productForm.get('expiration').value, */
          }
      });

    this.close();
  }

}
