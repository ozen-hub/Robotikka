import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SecurityRoutingModule } from './security-routing.module';
import { SecurityComponent } from './security.component';
import { LoginComponent } from './components/login/login.component';
import { SignupComponent } from './components/signup/signup.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import { SecurityHeaderComponent } from './components/security-header/security-header.component';
import {ReactiveFormsModule} from "@angular/forms";
import { VerificationComponent } from './components/verification/verification.component';


@NgModule({
  declarations: [
    SecurityComponent,
    LoginComponent,
    SignupComponent,
    SecurityHeaderComponent,
    VerificationComponent
  ],
    imports: [
        CommonModule,
        SecurityRoutingModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        ReactiveFormsModule
    ]
})
export class SecurityModule { }
