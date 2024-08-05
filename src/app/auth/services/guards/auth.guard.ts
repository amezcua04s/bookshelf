import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanMatch, Route, Router, RouterStateSnapshot, UrlSegment } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth.service';

@Injectable({providedIn: 'root'})

export class AuthGuard implements CanMatch, CanActivate {

  constructor(
    private auth : AuthService,
    private router : Router,
  ){ }

  private checkAuthStatus(): boolean | Observable<boolean>{

    return this.auth.checkAuthentication()
      .pipe(
        tap( isAuthenticated => console.log('Autenticado:', isAuthenticated)),
        tap( isAuthenticated => {
          if(!isAuthenticated) {
            this.router.navigate(['./auth/login'])
          }
        } )
      )

  }

  canMatch(route: Route, segments: UrlSegment[]): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> {
    return this.checkAuthStatus();
  }

}
