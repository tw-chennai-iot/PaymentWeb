import { Routes } from '@angular/router';
import { CartComponent } from './cart/cart.component';

export const AppRoutes: Routes = [
  {path: 'cart/:id', component: CartComponent}
];
