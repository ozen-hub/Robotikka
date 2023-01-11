import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {UserService} from "../../../share/services/user/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) { }

  registerForm= new FormGroup({
    firstName: new FormControl(null,[Validators.required]),
    lastName: new FormControl(null,[Validators.required]),
    contact: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required]),
  })

  ngOnInit(): void {
  }

  signup() {

    this.userService.register(
      this.registerForm.get('firstName')?.value!,
      this.registerForm.get('lastName')?.value!,
      this.registerForm.get('contact')?.value!,
      this.registerForm.get('email')?.value!,
      this.registerForm.get('password')?.value!,
    ).subscribe(response=>{
      console.log(response);
      alert('verify your account')
      this.router.navigateByUrl('/security/verify/'+this.registerForm.get('email')?.value!).then();
    })

  }
}
