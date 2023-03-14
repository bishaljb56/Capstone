import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { UserService } from '../user/user.service';
@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private _injector: Injector, private _router: Router) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const userService = this._injector.get(UserService);
    const token = userService.getToken()!;

    if (req.headers.get('skip') && token) {
      req.headers.delete('skip');
      req = this.setToken(req, token);
    }
    else if (!req.headers.get("skip")) {
      req = this.setToken(req, token);
    }
    // return next.handle(req);

    return next.handle(req).pipe(catchError(err => {
      const error = err! || err.error?.message! || err.statusText!;
      if (error == 'Invalid Token') {
        console.warn(error);
        userService.removeToken();
        this._router.navigate(['/user/login'], { queryParams: { 'error': `${error}` } });
      }
      return throwError(error);
    }));
  }


  private setToken(req: HttpRequest<any>, token: string): HttpRequest<any> {

    if (!token)
      this._router.navigate(['/user/login'], { queryParams: { 'login': true } });

    return req.clone({
      setHeaders: {
        'Authorization': `Bearer ${token}`
      }
    });
  }

}
