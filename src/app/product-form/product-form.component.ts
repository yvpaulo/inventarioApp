import { Component, OnInit, ChangeDetectionStrategy, Input, Output, ViewChild, EventEmitter, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators, ValidatorFn, AbstractControl } from '@angular/forms';
import { ClrWizard } from '@clr/angular';
import {pick} from 'lodash/';

@Component({
  selector: 'spa-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductFormComponent implements OnInit, OnChanges {

productForm: FormGroup;
@Input() product;
@Output() finish = new EventEmitter();
@ViewChild('productWizard', { static: false }) productWizard: ClrWizard;
constructor(private fb: FormBuilder) {
this.productForm = this.fb.group({
  basic: fb.group({
  name: ['', Validators.required],
  active: true,
  unity: ['', Validators.required]
  }),
});
}

ngOnInit() {
  if (this.product) {
      this.productForm.setValue({
          basic: {
              ...pick(this.product, ['name', 'unity', 'active']),

          },

      });

  }
}

ngOnChanges() {
   this.ngOnInit();
}
get basicFeatures(): FormArray {
  return this.productForm.get('basic.features') as FormArray;
}

get isBasicInvalid(): boolean {
  return this.productForm.get('basic').invalid;
}

  handleClose() {
      this.finish.emit();
      this.close();
  }

  close() {
      this.productForm.reset();
      this.productWizard.goTo(this.productWizard.pageCollection.pages.first.id);
      this.productWizard.reset();
  }
  //utilizando EventEmitter para enviar os dados cadastrados como um product
  handleFinish() {
      this.finish.emit({
          product: {
                //aqui pego todo o conteúdo preenchido no form referente ao produto
              ...this.productForm.get('basic').value,
              //se tiver outra página posso enviar seu conteudo or aqui
              /* ...this.productForm.get('expiration').value, */
          }
      });

      this.close();
  }

}
