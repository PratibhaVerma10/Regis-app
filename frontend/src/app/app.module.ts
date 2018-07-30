import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { RegisteredComponent } from './registered/registered.component';
import { RegisteredService } from './registered.service';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { AddCategoryComponent } from './add-category/add-category.component';
import { ViewCategoryComponent } from './view-category/view-category.component';
import { AddcatsService } from './addcats.service';
import { AddSubCategoryComponent } from './add-sub-category/add-sub-category.component';
import { AddSubSubCategoryComponent } from './add-sub-sub-category/add-sub-sub-category.component';
import { AddBannerComponent } from './add-banner/add-banner.component';
import { AddsubcatsService } from './addsubcats.service';
import { AddsubsubcatsService } from './addsubsubcats.service';
import { ViewBannerComponent } from './view-banner/view-banner.component';
import { AddAdvertiserComponent } from './add-advertiser/add-advertiser.component';
import { AdvertisersService } from './advertisers.service';
import { ViewReqAdvertiserComponent } from './view-req-advertiser/view-req-advertiser.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ViewProductComponent } from './view-product/view-product.component';
import { BannersService } from './banners.service';
import { ViewAdvertiserComponent } from './view-advertiser/view-advertiser.component';
import { AddProductCsvComponent } from './add-product-csv/add-product-csv.component';
import { AddOfferComponent } from './add-offer/add-offer.component';
import { ViewOfferComponent } from './view-offer/view-offer.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisteredComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    AddCategoryComponent,
    ViewCategoryComponent,
    AddSubCategoryComponent,
    AddSubSubCategoryComponent,
    AddBannerComponent,
    ViewBannerComponent,
    AddAdvertiserComponent,
    ViewReqAdvertiserComponent,
    ProductAddComponent,
    ViewProductComponent,
    ViewAdvertiserComponent,
    AddProductCsvComponent,
    AddOfferComponent,
    ViewOfferComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot ([
      {
        path: '', component: HomeComponent
      },
      {
        path:'add-category',    component: AddCategoryComponent
      },
      {
        path:'view-category',    component: ViewCategoryComponent
      },
      {
        path:'add-sub-category',    component: AddSubCategoryComponent
      },
      {
        path:'add-sub-sub-category',    component: AddSubSubCategoryComponent
      },
      {
        path:'add-banner',    component: AddBannerComponent
      },
      {
        path:'view-banner',    component: ViewBannerComponent
      },
      {
        path:'add-advertiser',    component: AddAdvertiserComponent
      },
      {
        path:'view-advertiser',    component: ViewAdvertiserComponent
      },
      {
        path:'view-req-advertiser',    component: ViewReqAdvertiserComponent
      },
      {
        path:'add-product-csv',    component: AddProductCsvComponent
      },
      {
        path:'add-offer',    component: AddOfferComponent
      },
      {
        path:'view-offer',    component: ViewOfferComponent
      },
      {
        path:'view-product',    component: ViewProductComponent
      },
     
      {
        path:'registered',    component: RegisteredComponent
      }
    ])
  ],
  providers: [RegisteredService, 
              AddcatsService, 
              AddsubcatsService, 
              AddsubsubcatsService, 
              BannersService,
              AdvertisersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
