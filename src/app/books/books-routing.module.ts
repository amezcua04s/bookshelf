import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { NewPageComponent } from './pages/new-page/new-page.component';
import { SearchPageComponent } from './pages/search-page/search-page.component';
import { ListPageComponent } from './pages/list-page/list-page.component';
import { BookPageComponent } from './pages/book-page/book-page.component';

//localhost:4200/books
const routes: Routes = [
  {
    path      : '',
    component : LayoutPageComponent,
    children  : [
      { path : 'new-book', component : NewPageComponent},
      { path : 'search',   component : SearchPageComponent},
      { path : 'edit/:id', component : NewPageComponent},
      { path : 'list',     component : ListPageComponent},
      { path : ':id',      component : BookPageComponent},
       //Comodin que nos lleva al componente del heroe
      { path : '**',      redirectTo : 'list'}
    ],
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BooksRoutingModule { }
