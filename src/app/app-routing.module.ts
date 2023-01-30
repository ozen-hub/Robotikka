import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {RouteGuard} from "./modules/share/guard/route.guard";

const routes: Routes = [
  {path:'', redirectTo:'/process/landing', pathMatch:'full'},
  { path: 'process', loadChildren: () => import('./modules/process/process.module').then(m => m.ProcessModule) },
  { path: 'console', loadChildren: () => import('./modules/console/console.module').then(m => m.ConsoleModule),canActivate:[RouteGuard] },
  { path: 'security', loadChildren: () => import('./modules/security/security.module').then(m => m.SecurityModule) },
  { path: 'share', loadChildren: () => import('./modules/share/share.module').then(m => m.ShareModule) }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
