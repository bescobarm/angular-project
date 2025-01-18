import { Component, OnInit, signal } from '@angular/core';
import { Product } from '@shared/models/product.models';
import { ProductService } from '@shared/services/product.service';
import { Carousel } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    standalone: true,
    imports: [Carousel, ButtonModule],
    providers: [ProductService]
})
export default class CarouselComponent {
    products = signal<Product[]>([])

    constructor(private productService: ProductService) {}

    ngOnInit() {
        this.getProducts()
    }

    private getProducts() {
      this.productService.getProducts()
      .subscribe({
        next: (products) => {
          this.products.set(products)
        },
      })
    }
}