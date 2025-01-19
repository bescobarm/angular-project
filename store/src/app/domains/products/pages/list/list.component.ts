import { Component, inject, Input, signal, SimpleChanges } from '@angular/core';
import { ProductComponent } from '@products/components/product/product.component';

import { Product } from '@shared/models/product.models';
import { CartService } from '@shared/services/cart.service';
import { ProductService } from '@shared/services/product.service';
import { CategoryService } from '@shared/services/category.service';
import { Category } from '@shared/models/category.models';
import { RouterLinkWithHref } from '@angular/router';

@Component({
  selector: 'app-list',
  imports: [ProductComponent,RouterLinkWithHref],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export default class ListComponent {
  products = signal<Product[]>([])
  categories = signal<Category[]>([])

  private cartService = inject(CartService)
  private productService = inject(ProductService)
  private categoryService = inject(CategoryService)

  @Input() category_id?: string

  ngOnInit() {
    this.getCategories()
  }

  ngOnChanges() {
    this.getProducts()  
  }

  addToCart(product: Product) {
    this.cartService.addToCart(product)
  }

  private getProducts() {
    this.productService.getProducts(this.category_id)
    .subscribe({
      next: (products) => {
        this.products.set(products)
      },
    })
  }

  private getCategories() {
    this.categoryService.getCategories()
    .subscribe({
      next: (data) => {
        this.categories.set(data.filter(category => 
          category.name === 'Furniture' || 
          category.name === 'Electronics' || 
          category.name === 'Miscellaneous' ||
          category.name === 'Shoes'  ||
          category.name === 'nuevo'
        ));
      },
    })
  }
}
