import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SwiperModule } from 'swiper/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImgComponent } from '../app/website/components/img/img.component';
import { ProductComponent } from '../app/website/components/product/product.component';
import { ProductsComponent } from '../app/website/components/products/products.component';
import { NavComponent } from '../app/website/components/nav/nav.component';
import { ReversePipe } from '../app/website/pipes/reverse.pipe';
import { TimeAgoPipe } from '../app/website/pipes/time-ago.pipe';
import { HighlightDirective } from '../app/website/directives/highlight.directive';
import { TimeInterceptor } from './interceptors/time.interceptor';
import { TokenInterceptor } from './interceptors/token.interceptor';
import { HomeComponent } from '../app/website/pages/home/home.component';
import { NotFoundComponent } from '../app/website/pages/not-found/not-found.component';
import { CategoryComponent } from '../app/website/pages/category/category.component';
import { MyCartComponent } from '../app/website/pages/my-cart/my-cart.component';
import { LoginComponent } from '../app/website/pages/login/login.component';
import { RegisterComponent } from '../app/website/pages/register/register.component';
import { RecoveryComponent } from '../app/website/pages/recovery/recovery.component';
import { ProfileComponent } from '../app/website/pages/profile/profile.component';
import { ProductDetailComponent } from '../app/website/pages/product-detail/product-detail.component';
import { LayoutComponent } from './website/components/layout/layout.component';

@NgModule({
  declarations: [
    AppComponent,
    ImgComponent,
    ProductComponent,
    ProductsComponent,
    NavComponent,
    ReversePipe,
    TimeAgoPipe,
    HighlightDirective,
    HomeComponent,
    NotFoundComponent,
    CategoryComponent,
    MyCartComponent,
    LoginComponent,
    RegisterComponent,
    RecoveryComponent,
    ProfileComponent,
    ProductDetailComponent,
    LayoutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    SwiperModule,
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: TimeInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptor, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
