import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent }  from './app.component';
import { AppRoutes } from './route';
import { CartComponent } from './cart/cart.component';
import { RouterModule, Routes, ROUTER_PROVIDERS } from '@angular/router';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(AppRoutes, {useHash: true})],
  exports: [
    RouterModule, HttpModule
  ],
  providers: [CartComponent],
  declarations: [AppComponent, CartComponent],
  bootstrap: [AppComponent],
})

export class AppModule {
}
