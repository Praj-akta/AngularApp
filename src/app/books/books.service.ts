import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor() { }

  getBooks() {
    return [
      {
        title: "Pragmatic Programmer",
        author:"david Thomas",
        price: 40,
        imgUrl: "https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg"
      },
      {
        title: "Clean code",
        price: 50,
        author:"robert Martin",
        imgUrl: "https://m.media-amazon.com/images/I/41xShlnTZTL._SX376_BO1,204,203,200_.jpg"
      },
      {
        title: "Pragmatic Programmer",
        author:"david Thomas",
        price: 40,
        imgUrl: "https://m.media-amazon.com/images/I/51IA4hT6jrL._SX380_BO1,204,203,200_.jpg"
      },
      {
        title: "Transitioning to Java",
        author:"Ken Fogel ",
        price: 20,
        imgUrl: "https://m.media-amazon.com/images/I/41FfNJC0uTL._SX404_BO1,204,203,200_.jpg"
      }
    ]
  }
}
