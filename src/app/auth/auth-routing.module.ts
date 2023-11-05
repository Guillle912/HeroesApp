import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routs: Routes = [];

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
