import { Injectable } from '@angular/core';
import {
  CanActivate, CanActivateChild, CanLoad,
  Router, ActivatedRouteSnapshot, Route,
  RouterStateSnapshot
} from '@angular/router';
import { AuthService } from '../core/auth.service';
@Injectable()
export class AuthGuardService implements CanActivate, CanLoad {
  constructor(private _authService: AuthService, private _router: Router) {
   }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url = state.url;
    return this.checkLogin(url);
  }
  checkLogin(url: string):boolean{
    if (this._authService.user) {
      return true;
    } else {
      this._authService.redirectUrl = url;
      //this._router.navigate(['/auth']);
      return false;
    }
  }
  canLoad(route: Route): boolean {
    let url = `/${route.path}`;

    return this.checkLogin(url);
  }
}
