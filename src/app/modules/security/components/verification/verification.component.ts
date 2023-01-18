import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {UserService} from "../../../share/services/user/user.service";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(private router:Router, private userService: UserService, private selectedRoute:ActivatedRoute) { }
  email='';
  verificationForm= new FormGroup({
    code: new FormControl('',[Validators.required])
  })
  ngOnInit(): void {
    this.selectedRoute.paramMap.subscribe(result=>{
      this.email = result.get('email')!;
    })
  }

  verify() {
    if (!this.email){alert('please retry');return;}

    let observable = this.userService.verify(
      this.verificationForm.get('code')?.value!,
      this.email
    );
    observable.subscribe(response=>{
      alert('verification success!')
      this.router.navigateByUrl('/security/login');
    })
  }
}
