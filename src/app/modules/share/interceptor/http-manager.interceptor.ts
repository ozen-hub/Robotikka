import {Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {catchError, finalize, Observable, throwError} from 'rxjs';
import {LoadingService} from "../services/loading/loading.service";
import {AuthService} from "../services/auth/auth.service";
import {Router} from "@angular/router";

@Injectable()
export class HttpManagerInterceptor implements HttpInterceptor {

  constructor(private router: Router, private authService: AuthService, private loadingService: LoadingService) {
  }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    this.loadingService.loadingState.next(true);
    if (this.authService.checkCookie('robotikka')) {
      request = request.clone({
        setHeaders: {Authorization: this.authService.getCookie('robotikka')}
      });
    }
    return next.handle(request).pipe(
      catchError(err => {
        console.log(err);
        if (err.status == 401 || err.status == 403) {
          alert('Unauthorized');
          this.authService.clearCookie();
          this.router.navigateByUrl('/security');
        }
        const error = err.errror.message || err.statusText;
        return throwError(error)
      }),
      finalize(() => {
        this.loadingService.loadingState.next(false);
      })
    );
  }
}
