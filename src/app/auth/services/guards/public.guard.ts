import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Route, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, map, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})

export class PublicGuard implements CanActivate {

  constructor(
    private auth : AuthService,
    private router : Router,
  ){ }

  private checkAuthStatus(): boolean | Observable<boolean>{

    return this.auth.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Autenticado:', isAuthenticated)),
        tap( isAuthenticated => {
          if( isAuthenticated ) {
            this.router.navigate(['./'])
          }
        } ),
        map( isAuthenticated => !isAuthenticated)
      )

  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

}
