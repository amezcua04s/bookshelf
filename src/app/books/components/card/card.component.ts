import { BookInterface } from './../../interfaces/book-interface';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'books-book-card',
  templateUrl: './card.component.html',
  styles: ``
})
export class CardComponent  implements OnInit{

  @Input()
  public book !: BookInterface;

  ngOnInit(): void {
    if(!this.book) throw Error('Book propierty is requiered');
  }
}
