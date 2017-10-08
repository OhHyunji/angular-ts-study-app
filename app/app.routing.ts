import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './components/home.component';
import {ProductComponent} from './components/product.component';

export const routes : Routes = [
    {path: '', component: HomeComponent},
    {path: 'product', component: ProductComponent}
];
export const routing = RouterModule.forRoot(routes);