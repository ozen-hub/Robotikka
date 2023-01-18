import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardContextComponent } from './inner-items/dashboard-context/dashboard-context.component';
import { ManageProductComponent } from './inner-items/dashboard-context/items/manage-product/manage-product.component';
import { MainConsoleHeaderComponent } from './components/main-console-header/main-console-header.component';
import {MatInputModule} from "@angular/material/input";
import {MatFormFieldModule} from "@angular/material/form-field";
import {FormsModule} from "@angular/forms";
import {
  NewProductComponent
} from "./inner-items/dashboard-context/items/manage-product/new-product/new-product.component";
import {MatButtonModule} from "@angular/material/button";




@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    ManageProductComponent,
    MainConsoleHeaderComponent,
    NewProductComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatInputModule,
    MatFormFieldModule,
    MatButtonModule,
  ]
})
export class ConsoleModule { }
