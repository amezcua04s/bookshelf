import { Component, OnInit } from '@angular/core';
import { BookInterface } from '../../interfaces/book-interface';
import { BooksService } from '../../services/books.service';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styles: ``
})
export class ListPageComponent implements OnInit {

  public books : BookInterface[] = [];

  constructor(private bookService : BooksService ){}

  ngOnInit(): void {
    this.bookService.getbooks()
      .subscribe(books => this.books = books);
  }

}
