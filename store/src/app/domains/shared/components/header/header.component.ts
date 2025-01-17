import { Component, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [CommonModule,RouterLinkWithHref,RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSidebar = signal(true)
  private cartService = inject(CartService)
  cartProducts = this.cartService.cartProducts
  total = this.cartService.total

  toogleSideMenu() {
    this.hideSidebar.update(prevState => !prevState)
  }
}
