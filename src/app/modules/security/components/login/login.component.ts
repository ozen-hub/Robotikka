import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../share/services/user/user.service";
import {first} from "rxjs";
import {HttpResponse} from "@angular/common/http";
import {AuthService} from "../../../share/services/auth/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  form = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });

  constructor(private router: Router, private userService: UserService, private authService: AuthService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.form.get('email')?.value!,
      this.form.get('password')?.value!
    ).pipe(first())
      .subscribe(
        (data: HttpResponse<any>) => {
          console.log(data.headers.get('Authorization'));
          this.authService.createToken('robotikka', data.headers.get('Authorization')!);
          this.router.navigateByUrl('/console');
        }, error => {

        })
  }
}
