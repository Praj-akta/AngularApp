import { Injectable } from '@angular/core';
import { BookList } from '../interface/book';
import { AuthService } from '../auth/auth.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class CartService  {

  cart:BookList[] = [];
  constructor(private authService: AuthService, private router: Router) { }


  add(book: BookList) {
    if(this.authService.isAuthenticated) {
      this.cart.push(book);
    } else {
      alert("Please login first");
      this.router.navigate(["login"])
    }
  }

  get() {
    return this.cart;
  }

  remove(book: BookList) {
    this.cart = this.cart.filter((b) => b != book);
  }

}
