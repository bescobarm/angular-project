import { CommonModule } from '@angular/common';
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../../../shared/models/product.models';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) product!: Product

  @Output() addToCart = new EventEmitter;

  addToCartHandler() {
    console.log("click from child")
    this.addToCart.emit("msg sent from child")
  }
}
