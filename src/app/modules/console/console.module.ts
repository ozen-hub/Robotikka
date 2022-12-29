import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardContextComponent } from './inner-items/dashboard-context/dashboard-context.component';
import { ManageProductComponent } from './inner-items/dashboard-context/items/manage-product/manage-product.component';
import { MainConsoleHeaderComponent } from './components/main-console-header/main-console-header.component';
import {MatFormFieldModule} from "@angular/material/form-field";
import {MatInputModule} from "@angular/material/input";
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    ManageProductComponent,
    MainConsoleHeaderComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class ConsoleModule { }
