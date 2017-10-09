import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy }from '@angular/common';

import { routing } from './app.routing';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDescriptionComponent } from './components/product-description.component';
import { SellerDetailComponent } from './components/seller-detail.component';
import { Error404Component } from './components/error404.component';

import { LoginGuard } from './guards/login.guard';
import { UnsavedChangesGuard } from './guards/unsaved_changes.guard';

@NgModule({
  imports: [ BrowserModule, routing ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerDetailComponent,
    Error404Component
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, UnsavedChangesGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}