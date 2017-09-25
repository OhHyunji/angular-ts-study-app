import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import ApplicationComponent from './components/application/application.component';
import ProductItemComponent from './components/product-item/product-item.component';
import {ProductService} from './services/product.service';

@NgModule({
    imports: [BrowserModule],
    declarations: [
        ApplicationComponent,
        ProductItemComponent,
    ],
    providers: [ProductService],
    bootstrap: [ApplicationComponent]
})
export class AppModule {
}