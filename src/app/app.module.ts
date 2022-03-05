import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbPaginationModule, NgbAlertModule, NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './user/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { UserComponent } from './user/user.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ProductComponent } from './components/product/product.component';
import { LandingComponent } from './components/landing/landing.component';
import { TshirtComponent } from './components/category/tshirt/tshirt.component';
import { ShirtComponent } from './components/category/shirt/shirt.component';
import { JeansComponent } from './components/category/jeans/jeans.component';
import { LowerComponent } from './components/category/lower/lower.component';
import { MaterComponent } from './components/mater/mater.component';
import { ChappalComponent } from './components/category/chappal/chappal.component';
import { SheosComponent } from './components/category/sheos/sheos.component';
import { SignupComponent } from './user/signup/signup.component';
import { BrandComponent } from './components/category/brand/brand.component';
import { ChangepasswordComponent } from './user/changepassword/changepassword.component';
import { ToastrModule } from 'ngx-toastr';
import { UpdateuserdataComponent } from './components/updateuserdata/updateuserdata.component';
import { RootguardGuard } from './auth/rootguard.guard';
import { AuthGuard } from './auth/auth.guard';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ProductComponent,
    LandingComponent,
    LoginComponent,
    SignupComponent,
    TshirtComponent,
    ShirtComponent,
    JeansComponent,
    LowerComponent,
    SheosComponent,
    ChappalComponent,
    MaterComponent,
    UserComponent,
    BrandComponent,
    ChangepasswordComponent,
    UpdateuserdataComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbPaginationModule,
    NgbAlertModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatInputModule,
    FormsModule,
    ToastrModule.forRoot({
      timeOut:3000,
      positionClass:'toast-top-right',
    }),
  ],
  providers: [RootguardGuard,AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
