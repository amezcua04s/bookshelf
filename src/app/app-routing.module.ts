import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanMatch } from '@angular/router';

import { Error404PageComponent } from './shared/pages/error404-page/error404-page.component';
import { AuthGuard } from './auth/services/guards/auth.guard';
import { PublicGuard } from './auth/services/guards/public.guard';

const routes: Routes = [
  {
    path : 'auth',
    loadChildren : () => import('./auth/auth.module').then( m => m.AuthModule ),
    canActivate  : [PublicGuard],
  },
  {
    path : 'books',
    loadChildren : () => import ('./books/books.module').then (m => m.BooksModule ),
    canActivate  : [ AuthGuard ],
    canMatch     : [AuthGuard],
  },
  {
    path : '404',
    component : Error404PageComponent
  },
  {
    path : '',
    redirectTo : 'books',
    pathMatch : 'full',
  },
  {
    path : '**',
    redirectTo : '404',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
