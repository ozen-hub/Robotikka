import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { ProcessHeaderComponent } from './components/process-header/process-header.component';
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { ProductComponent } from './components/product/product.component';


@NgModule({
  declarations: [
    ProcessComponent,
    ProcessHeaderComponent,
    LandingPageComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule,
    MatMenuModule,
    MatButtonModule,
    MatIconModule
  ]
})
export class ProcessModule { }
