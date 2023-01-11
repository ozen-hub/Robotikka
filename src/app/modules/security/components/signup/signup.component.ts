import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  registerForm= new FormGroup({
    firstName: new FormControl(null,[Validators.required]),
    lastName: new FormControl(null,[Validators.required]),
    email: new FormControl(null,[Validators.required,Validators.email]),
    password: new FormControl(null,[Validators.required]),
  })

  ngOnInit(): void {
  }

  signup() {

  }
}
