import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './components/home/home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductListItemComponent } from './components/product-list-item/product-list-item.component';
import { ProductDetailsComponent } from './components/product-details/product-details.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { AboutUsComponent } from './components/about-us/about-us.component';
import { ContactUsComponent } from './components/contact-us/contact-us.component';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProfileComponent } from './components/profile/profile.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    HomeComponent,
    ProductListComponent,
    ProductListItemComponent,
    ProductDetailsComponent,
    ShoppingCartComponent,
    AboutUsComponent,
    ContactUsComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    NgbCarouselModule,
    SharedModule,
    ReactiveFormsModule,
    RouterModule,
  ]
})
export class ShopModule { }
