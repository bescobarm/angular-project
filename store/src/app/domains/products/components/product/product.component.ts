import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  imports: [CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent {
  @Input({required:true}) img: string = '';
  @Input({required:true}) price: number = 0;
  @Input({required:true}) title: string = '';
  // img = 'https://picsum.photos/640/640?r=' + Math.random()
}
