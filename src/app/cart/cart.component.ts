import { Component, OnInit } from '@angular/core';
import { CartService } from './cart.service';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  constructor(
    private cartService: CartService,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    if(!this.authService.isAuthenticated) {
      this.router.navigate(['login']);
    }
  }

  getCart() {
    return this.cartService.get();
  }

}
