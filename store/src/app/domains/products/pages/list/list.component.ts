import { Component, signal } from '@angular/core';
import { ProductComponent } from '../../components/product/product.component';
import { CommonModule } from '@angular/common';
import { Product } from '../../../shared/models/product.models';

@Component({
  selector: 'app-list',
  imports: [CommonModule, ProductComponent],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  products = signal<Product[]>([])

  constructor() {
    const initProducts: Product[] = [
      {
        id: Date.now(),
        title: 'prod 1',
        price: '123',
        image: 'https://picsum.photos/640/640?r=23',
        creationAt: new Date().toISOString()
      },
      {
        id: Date.now(),
        title: 'prod 2',
        price: '456',
        image: 'https://picsum.photos/640/640?r=24',
        creationAt: new Date().toISOString()
      }
    ]
    this.products.set(initProducts)
  }

  fromChild(event: string) {
    console.log("we're in the father")
    console.log("msg: ", event)
  }
}
