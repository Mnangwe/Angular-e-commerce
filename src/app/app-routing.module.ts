import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LogInComponent } from './components/log-in/log-in.component';
import { ProductDetailComponent } from './components/product-detail/product-detail.component';
import { SignUpComponent } from './components/sign-up/sign-up.component';
import { NotFoundComponent } from './components/not-found/not-found.component';

const routes: Routes = [
  {path: '', redirectTo: 'login', pathMatch: 'full'},
  {path: 'login', component: LogInComponent},
  {path: 'register', component: SignUpComponent},
  {path: 'home', component: HomePageComponent},
  {path: 'cart', component: CartComponent},
  {path: 'product/:id', component: ProductDetailComponent},
  { path: '**', pathMatch: 'full', component: NotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
