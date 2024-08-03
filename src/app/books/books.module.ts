import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from '../material/material.module';

import { BooksRoutingModule } from './books-routing.module';
import { BookPageComponent } from './pages/book-page/book-page.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { PipesModule } from './pipes/pipes.modules';
import { CardComponent } from './components/card/card.component';


@NgModule({
  declarations: [
    BookPageComponent,
    LayoutPageComponent,
    ListPageComponent,
    NewPageComponent,
    SearchPageComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    BooksRoutingModule,
    MaterialModule,
    PipesModule
  ]
})
export class BooksModule { }
