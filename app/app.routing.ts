import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home.component';
import { ProductComponent } from './components/product.component';
import { ProductDetailComponent } from './components/product-detail.component';
import { ProductDescriptionComponent } from './components/product-description.component';
import { SellerDetailComponent } from './components/seller-detail.component';
import { Error404Component } from './components/error404.component';

import { LoginGuard } from './guards/login.guard';
import {UnsavedChangesGuard} from './guards/unsaved_changes.guard';
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'product', component: ProductComponent },
  {
    path: 'product/:id', component: ProductDetailComponent,
    data: [ { isProd: true } ],
    canActivate: [ LoginGuard ],
    canDeactivate: [UnsavedChangesGuard],
    children: [
      { path: '', component: ProductDescriptionComponent },
      { path: 'seller/:id', component: SellerDetailComponent }
    ]
  },
  { path: '**', component: Error404Component }
];

export const routing = RouterModule.forRoot(routes);