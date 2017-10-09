import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { LocationStrategy, HashLocationStrategy }from '@angular/common';

import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './components/app.component';
import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDescriptionComponent } from './components/product-description.component';
import { SellerDetailComponent } from './components/seller-detail.component';
import { Error404Component } from './components/error404.component';
import { ChatComponent } from './components/chat.component';

import { LuxuryModule } from './components/luxury/luxury.module';

import { LoginGuard } from './guards/login.guard';
import { UnsavedChangesGuard } from './guards/unsaved_changes.guard';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'chat', component: ChatComponent, outlet: 'aux' },
  { path: 'product', component: ProductComponent },
  {
    path: 'product/:id', component: ProductDetailComponent,
    data: [ { isProd: true } ],
    canActivate: [ LoginGuard ],
    canDeactivate: [ UnsavedChangesGuard ],
    children: [
      { path: '', component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerDetailComponent }
    ]
  },
  { path: 'luxury', loadChildren: 'app/components/luxury/luxury.lazy.module' },   //지연로딩
  { path: '**', component: Error404Component }
];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    // LuxuryModule   //즉시로딩
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent,
    ProductDescriptionComponent,
    SellerDetailComponent,
    Error404Component,
    ChatComponent
  ],
  providers: [ { provide: LocationStrategy, useClass: HashLocationStrategy }, LoginGuard, UnsavedChangesGuard ],
  bootstrap: [ AppComponent ]
})

export class AppModule {
}