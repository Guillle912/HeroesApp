import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';

const routs: Routes = [
  { path: '', component: LayoutPageComponent,
  children:[
    { path: 'login', component: LoginPageComponent},
    { path: 'new-acount', component: RegisterPageComponent},
    { path: '**', redirectTo: 'login'},
  ]},

];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild( routs ),
  ],
  exports: [
    RouterModule,
  ]
})
export class AuthRoutingModule { }
