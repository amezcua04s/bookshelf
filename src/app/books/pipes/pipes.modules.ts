// pipes.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { evalBoolean } from './is-true.pipe';
import { toggleTitle } from './toggle-case.pipe';
import { evalAva } from './avalibable.pipe';
import { BookImagePipe } from './book-image.pipe';


@NgModule({
  declarations: [
    evalBoolean,
    evalAva,
    toggleTitle,
    BookImagePipe
  ],
  imports: [CommonModule],
  exports: [
    evalBoolean,
    toggleTitle,
    evalAva,
    BookImagePipe
  ]
})
export class PipesModule { }
