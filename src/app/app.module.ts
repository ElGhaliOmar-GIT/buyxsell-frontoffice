import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './front-office/navbar/navbar.component';
import { FooterComponent } from './front-office/footer/footer.component';
import { HomeComponent } from './front-office/comp/home/home.component';
import { ProductComponent } from './front-office/comp/product/product.component';
import { ProductDetailComponent } from './front-office/comp/product-detail/product-detail.component';
import { ShopComponent } from './front-office/comp/shop/shop.component';
import { ShopDetailComponent } from './front-office/comp/shop-detail/shop-detail.component';
import { CartComponent } from './front-office/comp/cart/cart.component';
import { CheckoutComponent } from './front-office/comp/checkout/checkout.component';
import { AccountComponent } from './front-office/comp/account/account.component';
import { RegisterComponent } from './front-office/comp/register/register.component';
import { LoginComponent } from './front-office/comp/login/login.component';
import { ContactComponent } from './front-office/comp/contact/contact.component';
import { IndexComponent } from './front-office/comp/index/index.component';
import { NavbarBackComponent } from './back-office/navbar-back/navbar-back.component';
import { FooterBackComponent } from './back-office/footer-back/footer-back.component';
import { SidebarBackComponent } from './back-office/sidebar-back/sidebar-back.component';
import { DashboardComponent } from "./back-office/comp/dashboard/dashboard.component";
import { TestadminComponent } from './front-office/comp/testadmin/testadmin.component';
import { ForbiddenComponent } from './front-office/comp/forbidden/forbidden.component';
import { ProfileComponent } from './front-office/comp/profile/profile.component';
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {RouterModule} from "@angular/router";
import {AuthGuard} from "./shared/_auth/auth.guard";
import {AuthInterceptor} from "./shared/_auth/auth.interceptor";
import {GlobUserService} from "./shared/services/glob-user.service";
import { TestadminxclientComponent } from './front-office/comp/testadminxclient/testadminxclient.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ShopComponent,
    ShopDetailComponent,
    CartComponent,
    CheckoutComponent,
    AccountComponent,
    RegisterComponent,
    LoginComponent,
    ContactComponent,
    IndexComponent,
    NavbarBackComponent,
    FooterBackComponent,
    SidebarBackComponent,
    DashboardComponent,
    TestadminComponent,
    ForbiddenComponent,
    ProfileComponent,
    TestadminxclientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    },
    GlobUserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
