import { Component, signal, inject } from '@angular/core';
import { PpService } from '@shared/services/pp.service';
import { CartService } from '../../services/cart.service';
import { RouterLinkWithHref, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLinkWithHref, RouterLinkActive],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  hideSidebar = signal(true)
  private cartService = inject(CartService)
  cartProducts = this.cartService.cartProducts
  total = this.cartService.total

  private pService = inject(PpService)

  toogleSideMenu() {
    this.hideSidebar.update(prevState => !prevState)
  }

  changePValue() {
    this.pService.changeP()
  }
}
