import { Pipe, PipeTransform } from '@angular/core';
import { BookInterface } from '../interfaces/book-interface';

@Pipe({
  name: 'bookImage'
})
export class BookImagePipe implements PipeTransform {

  transform(book : BookInterface): string {
    if( !book.id && !book.alt_img){
      return 'assets/no-image.png'
    }
    if ( book.alt_img) return book.alt_img;

    return `assets/books/${ book.id }.jpeg`
  }

}
