import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy }from '@angular/common';

import { routing } from './app.routing';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './components/product-detail.component';

import { Error404Component } from './components/error404.component';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    Error404Component
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy } ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}