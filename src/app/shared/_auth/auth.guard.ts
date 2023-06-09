import { Injectable } from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree} from '@angular/router';
import { Observable } from 'rxjs';
import {UserAuthService} from "../services/user-auth.service";
import {GlobUserService} from "../services/glob-user.service";

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private userAuthService: UserAuthService,
              private globUserService: GlobUserService,
              private router: Router) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.userAuthService.getToken() !== null) {
        const role = route.data["role"] as string;
        if(role) {
          const match = this.globUserService.roleVerification(role);
          if(match) {
            return true;
          } else {
            this.router.navigate(['/forbiddenFront']);
            return false;
          }
        }
      }
      this.router.navigate(['loginFront']);
      return false;
  }

}
