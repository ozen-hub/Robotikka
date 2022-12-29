import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConsoleRoutingModule } from './console-routing.module';
import { ConsoleComponent } from './console.component';
import { DashboardContextComponent } from './inner-items/dashboard-context/dashboard-context.component';
import { ManageProductComponent } from './inner-items/dashboard-context/items/manage-product/manage-product.component';
import { MainConsoleHeaderComponent } from './components/main-console-header/main-console-header.component';


@NgModule({
  declarations: [
    ConsoleComponent,
    DashboardContextComponent,
    ManageProductComponent,
    MainConsoleHeaderComponent
  ],
  imports: [
    CommonModule,
    ConsoleRoutingModule
  ]
})
export class ConsoleModule { }
