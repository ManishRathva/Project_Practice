import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  @Input('info') info!: Product;
  @Output() updateCartEvt = new EventEmitter<any>();
  isAddedtoCart: boolean = false;

  incQty() {
    this.info.qty++;
  }
  decQty() {
    if (this.info.qty > 1)
      this.info.qty--;
  }
  addTocart() {
    this.isAddedtoCart = !this.isAddedtoCart;
    let payload = {
      addTocart: this.isAddedtoCart,
      product: this.info,
    }
    this.updateCartEvt.emit(payload);
  }
}
