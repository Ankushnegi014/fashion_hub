import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { EditproductsComponent } from './component/editproducts/editproducts.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { UserslistComponent } from './component/userslist/userslist.component';


@NgModule({
  declarations: [
    DashboardComponent,
    AddproductComponent,
    EditproductsComponent,
    ProductlistComponent,
    UserslistComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule
  ]
})
export class AdminModule { }
