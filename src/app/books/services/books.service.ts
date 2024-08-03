import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
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

}
