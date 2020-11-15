import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'spa-count-product',
  templateUrl: './count-product.component.html',
  styleUrls: ['./count-product.component.css']
})
export class CountProductComponent implements OnInit {

  @Input() product;
  @Output() cancel = new EventEmitter();
  @Output() confirm = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }
  cancelCount() {
    this.cancel.emit();
    }
    confirmCount() {
    this.confirm.emit();
    }

}
