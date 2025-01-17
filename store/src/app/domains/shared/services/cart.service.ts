import { computed, Injectable, signal } from '@angular/core';
import { Product } from '../models/product.models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  cartProducts = signal<Product[]>([])
  total = computed(() => {
    const cartProducts = this.cartProducts()
    return cartProducts.reduce((total, product) => total + product.price, 0);
  })


  addToCart(product: Product) {
    this.cartProducts.update(prevState => [...prevState, product])
  }
}
