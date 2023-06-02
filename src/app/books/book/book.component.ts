import { Component, EventEmitter, Input, Output } from '@angular/core';
import { BookList } from '../../interface/book';
import { CartService } from 'src/app/cart/cart.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {
  @Input() book:BookList = {} as BookList;
  @Output() emitBook = new EventEmitter<BookList>()

  isInCart:boolean = false;

  constructor(private cartService: CartService) {}

  addToCart() {
    this.isInCart = true;
    console.log(this.isInCart)
    this.cartService.add(this.book);
  }

  removeFromCart() {
    this.isInCart = false;
    this.cartService.remove(this.book);
  }

  addToFavorites() {
    console.log("here")
  }
}
