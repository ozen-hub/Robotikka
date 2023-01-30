import {Injectable} from '@angular/core';
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private cookieService: CookieService) {
  }
  createToken(key: string, token: string): void {
    this.cookieService.set(key, token, {
      expires: 90,
      path:'/',
      domain:'localhost'
    });
  }
  checkCookie(key: string): boolean {
    return this.cookieService.check(key);
  }
  getCookie(key: string): string {
    return this.cookieService.get(key);
  }
  clearCookie(){
    this.cookieService.deleteAll('/');
  }
}
