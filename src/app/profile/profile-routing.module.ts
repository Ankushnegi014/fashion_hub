import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserprofileComponent } from './userprofile/userprofile.component';

const routes: Routes = [
  { path:"", children:[
    { path: "", component: UserprofileComponent },
  ] }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProfileRoutingModule { }
