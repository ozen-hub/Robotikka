import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConsoleComponent} from './console.component';
import {DashboardContextComponent} from "./inner-items/dashboard-context/dashboard-context.component";
import {ManageProductComponent} from "./inner-items/dashboard-context/items/manage-product/manage-product.component";
import {
  NewProductComponent
} from "./inner-items/dashboard-context/items/manage-product/new-product/new-product.component";
import {
  FindProductComponent
} from "./inner-items/dashboard-context/items/manage-product/find-product/find-product.component";
import {
  UpdateProductComponent
} from "./inner-items/dashboard-context/items/manage-product/update-product/update-product.component";
import {
  DeleteProductComponent
} from "./inner-items/dashboard-context/items/manage-product/delete-product/delete-product.component";
import {
  AllProductsComponent
} from "./inner-items/dashboard-context/items/manage-product/all-products/all-products.component";

const routes: Routes = [
  {
    path: '', component: ConsoleComponent, children: [
      {path: '', redirectTo: '/console/playground/product/new', pathMatch: 'full'},
      {
        path: 'playground', component: DashboardContextComponent, children: [
          {
            path: 'product', component: ManageProductComponent, children: [
              {path: 'new', component: NewProductComponent},
              {path: 'find', component: FindProductComponent},
              {path: 'update', component: UpdateProductComponent},
              {path: 'delete', component: DeleteProductComponent},
              {path: 'list', component: AllProductsComponent}
            ]
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ConsoleRoutingModule {
}
