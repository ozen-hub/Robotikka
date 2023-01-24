import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../share/services/user/user.service";

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

  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  login() {
    this.userService.login(
      this.form.get('email')?.value!,
      this.form.get('passwod')?.value!
    ).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
    })
  }
}
