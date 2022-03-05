import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from 'src/app/auth/auth.guard';
import { AddproductComponent } from './component/addproduct/addproduct.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { EditproductsComponent } from './component/editproducts/editproducts.component';
import { ProductlistComponent } from './component/productlist/productlist.component';
import { UserslistComponent } from './component/userslist/userslist.component';

const routes: Routes = [
  { path:"", children:[
    { path: "", component: DashboardComponent },
    { path:"addproduct", component:AddproductComponent },
    { path:"edit/:id", component:EditproductsComponent },
    { path:"productlist", component:ProductlistComponent },
    { path:"userlist", component:UserslistComponent },
  ], canActivate: [AuthGuard] },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
