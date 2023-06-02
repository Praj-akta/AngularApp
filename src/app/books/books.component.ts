import { Component, OnInit } from '@angular/core';
import { BookList } from '../interface/book';
import { BooksService } from './books.service';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css']
})
export class BooksComponent implements OnInit{
  list: BookList[] = [];
  cart: BookList[] = [];

  constructor(private bookService: BooksService){};

  ngOnInit(): void {
    this.list = this.bookService.getBooks();
  }

  // handleClick() {
  //   alert("Hi, its me")
  // }
}
