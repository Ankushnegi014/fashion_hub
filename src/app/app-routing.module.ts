import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChappalComponent } from './components/category/chappal/chappal.component';
import { JeansComponent } from './components/category/jeans/jeans.component';
import { LowerComponent } from './components/category/lower/lower.component';
import { SheosComponent } from './components/category/sheos/sheos.component';
import { ShirtComponent } from './components/category/shirt/shirt.component';
import { TshirtComponent } from './components/category/tshirt/tshirt.component';
import { LandingComponent } from './components/landing/landing.component';
import { ProductComponent } from './components/product/product.component';
import { BrandComponent } from './components/category/brand/brand.component';
import { LoginComponent } from './user/login/login.component';
import { SignupComponent } from './user/signup/signup.component';
import { UpdateuserdataComponent } from './components/updateuserdata/updateuserdata.component';
import { ImageuploadComponent } from './profile/imageupload/imageupload.component';


const routes: Routes = [{ path:"product", component:ProductComponent },
                        { path:"", component:LandingComponent },
                        { path:"chappal", component:ChappalComponent },
                        { path: "jeans", component: JeansComponent },
                        { path: "tshirt", component: TshirtComponent },
                        { path: "shirt", component: ShirtComponent },
                        { path: "lower", component: LowerComponent },
                        { path: "sheos", component: SheosComponent },
                        { path: "brand/:name", component: BrandComponent },
                        { path: "login", component:LoginComponent },
                        { path: "signup", component:SignupComponent },
                        { path: "imageupload", component:ImageuploadComponent },
                        { path: "updateuser/:id/:i", component:UpdateuserdataComponent},
                        { path: "admin", loadChildren: () => import('./module/admin/admin.module').then((m) => m.AdminModule)},
                        { path: "profile", loadChildren: () => import('./profile/profile.module').then((p) => p.ProfileModule)}
                        ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
