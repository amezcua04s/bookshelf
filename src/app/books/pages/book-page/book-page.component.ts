import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../services/books.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from 'rxjs';
import { BookInterface } from '../../interfaces/book-interface';

@Component({
  selector: 'app-book-page',
  templateUrl: './book-page.component.html',
  styles: ``
})
export class BookPageComponent implements OnInit {

  public book?: BookInterface;

  constructor (
    private bookService    : BooksService,
    private activatedRoute : ActivatedRoute,
    private router : Router,
  ){}

  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.bookService.getBookById( id ))
      ).subscribe( book => {

        if (!book) return this.router.navigate([ '/books/list' ]);

        this.book = book;
        console.log({book})

        return;
      })
  }

  goBack() : void {
    this.router.navigateByUrl('books/list')
  }

}
