import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProcessRoutingModule } from './process-routing.module';
import { ProcessComponent } from './process.component';
import { ProcessHeaderComponent } from './components/process-header/process-header.component';


@NgModule({
  declarations: [
    ProcessComponent,
    ProcessHeaderComponent
  ],
  imports: [
    CommonModule,
    ProcessRoutingModule
  ]
})
export class ProcessModule { }
