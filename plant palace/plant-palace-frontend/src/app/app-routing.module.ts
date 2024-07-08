import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { HomeComponent } from './shop/components/home/home.component';
import { ProductListComponent } from './shop/components/product-list/product-list.component';
import { ShoppingCartComponent } from './shop/components/shopping-cart/shopping-cart.component';
import { AboutUsComponent } from './shop/components/about-us/about-us.component';
import { ProductDetailsComponent } from './shop/components/product-details/product-details.component';
import { ContactUsComponent } from './shop/components/contact-us/contact-us.component';
import { ProfileComponent } from './shop/components/profile/profile.component';
import { NotFoundComponent } from './shared/components/not-found/not-found.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: ':productsType/:categoryName',
    component: ProductListComponent
  },
  {
    path: ':productsType/:categoryName/:id/details',
    component: ProductDetailsComponent
  },
  {
    path: 'shopping-cart',
    component: ShoppingCartComponent
  },
  {
    path: 'about-us',
    component: AboutUsComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'not-found',
    component: NotFoundComponent
  },
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: '/not-found'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
