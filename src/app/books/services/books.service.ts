import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, of } from 'rxjs';
import { BookInterface } from '../interfaces/book-interface';
import { environments } from '../../../environments/environments';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  private baseUrl = environments.baseUrl;

  constructor(private http : HttpClient) { }

  getbooks() : Observable<BookInterface[]>{
    return this.http.get<BookInterface[]>(`${this.baseUrl}/books`);
  }

  getBookById( id  : string): Observable<BookInterface | undefined> {
    return this.http.get<BookInterface>(`${this.baseUrl}/books/${ id }`)
    .pipe(
      catchError ( () => of(undefined))
    )
  }

  getSuggestions( query : string) : Observable<BookInterface[]> {
    return this.http.get<BookInterface[]>(`${this.baseUrl}/books?q=${ query }&_limit=2`)
  }

  addBook( book : BookInterface) : Observable<BookInterface>{
    return this.http.post<BookInterface>(`${this.baseUrl}/books`, book)
  }

  updateBook( book : BookInterface) : Observable<BookInterface>{
    if( !book.id) throw Error('Book id is requiered')
    return this.http.patch<BookInterface>(`${this.baseUrl}/books/${book.id}`, book)
  }

  deleteBookByName( id : string) : Observable<boolean>{
    return this.http.delete(`${this.baseUrl}/books/${id}`)
      .pipe(
        catchError( err => of(false)),
        map( resp => true )
      );
  }

}
