import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ShareRoutingModule } from './share-routing.module';
import { ShareComponent } from './share.component';
import { LoadingPageComponent } from './components/loading-page/loading-page.component';
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";


@NgModule({
  declarations: [
    ShareComponent,
    LoadingPageComponent
  ],
  exports: [
    LoadingPageComponent
  ],
  imports: [
    CommonModule,
    ShareRoutingModule,
    MatProgressSpinnerModule
  ]
})
export class ShareModule { }
