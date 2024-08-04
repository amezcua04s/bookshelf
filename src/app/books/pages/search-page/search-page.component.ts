import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { BookInterface } from '../../interfaces/book-interface';
import { BooksService } from '../../services/books.service';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styles: ``
})
export class SearchPageComponent {

  public searchInput = new FormControl('');
  public books : BookInterface[] = [];
  public selectedBook? : BookInterface;

  constructor (private bookService : BooksService ){}


  searchBook () {
    const value : string = this.searchInput.value || '';
    if(value === '') return ;
    console.log({value})

    this.bookService.getSuggestions( value )
      .subscribe( books => this.books = books);
  }

  onSelectedOption(event : MatAutocompleteSelectedEvent) : void {
    if( !event.option.value){
      this.selectedBook = undefined;
      return;
    }

    const book : BookInterface = event.option.value;
    this.searchInput.setValue(book.id)

    this.selectedBook = book

  }


}
