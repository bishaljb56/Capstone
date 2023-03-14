import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { UserService } from 'src/app/services/user/user.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  constructor(private _userService: UserService,
    private _router: Router) { }

  canActivate(): boolean {
    if (this._userService.isAdmin())
      return true;
    else
      this._router.navigate(['/home'], { queryParams: { 'un-authorized': true } });
    return false;
  }
}
