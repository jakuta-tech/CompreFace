import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainLayoutComponent} from "./ui/main-layout/main-layout.component";


const routes: Routes = [
  { path: '', component: MainLayoutComponent, children: [
      { path: '', redirectTo: '/organization', pathMatch: 'full' },
      { path: 'organization', loadChildren: './pages/organization/organization.module#OrganizationModule'}
    ]},
  { path: 'login', loadChildren: './pages/login/login.module#LoginModule'},
  { path: 'sign-up', loadChildren: './pages/sign-up/sign-up.module#SignUpModule'},
  { path: '**', redirectTo: '/' }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
