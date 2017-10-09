import {Routes, RouterModule} from '@angular/router';

import {HomeComponent} from './components/home.component';
import {ProductComponent} from './components/product.component';
import {ProductDetailComponent} from './components/product-detail.component';

import {Error404Component} from './components/error404.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductComponent},
    {path: 'product/:id', component: ProductDetailComponent, data: [{isProd: true}]},
    {path: '**', component: Error404Component}
];

export const routing = RouterModule.forRoot(routes);