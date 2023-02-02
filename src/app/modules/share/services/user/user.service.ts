import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import * as http from "http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {
  }

  public register(firstName: string, lastName: string, contact: string,
                  email: string, password: string): Observable<any> {
    return this.http.post('http://localhost:8001/api/v1/users/visitor/register', {
      firstName: firstName,
      lastName: lastName,
      contact: contact,
      email: email,
      password: password,
    })


  }

  public verify(code: string, email: string): Observable<any> {
    return this.http.post('http://localhost:8001/api/v1/users/visitor/verify/' + code + '?email=' + email, {})


  }

  login(email: string, password: string):Observable<any> {
    return this.http.post('http://localhost:8001/login',{
      username: email,
      password: password
    },{
      observe: 'response' as 'body'
    })
      .pipe(map(data=>{
        return data;
      }))
  }
}
