import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-verification',
  templateUrl: './verification.component.html',
  styleUrls: ['./verification.component.scss']
})
export class VerificationComponent implements OnInit {

  constructor(private selectedRoute:ActivatedRoute) { }
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

    // verify
  }
}
