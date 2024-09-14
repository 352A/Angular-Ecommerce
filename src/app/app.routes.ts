import { Routes } from '@angular/router';
import { ProductsComponent } from './products/products.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { CartComponent } from './cart/cart.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductDetailsComponent } from './product-details/product-details.component';

export const routes: Routes = [
  {
    path: '',
    component: ProductsComponent,
    title: 'Products Page',
  },
  {
    path: 'register',
    component: RegisterComponent,
    title: 'Registration',
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'Login',
  },
  {
    path: 'cart',
    component: CartComponent,
    title: 'Cart',
  },
  {
    path: 'product/:id',
    component: ProductDetailsComponent,
    title: 'Product Details',
  },
  {
    path: '**',
    component: NotFoundComponent,
    title: 'Page Not Found',
  },
];
