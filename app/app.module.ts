import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './components/app.component';
import {HomeComponent} from './components/home.component';
import {ProductComponent} from './components/product.component';
import {LocationStrategy, HashLocationStrategy}from '@angular/common';
import {routing} from './app.routing';

@NgModule({
    imports: [BrowserModule, routing],
    declarations: [
        AppComponent,
        HomeComponent,
        ProductComponent
    ],
    providers: [{provide: LocationStrategy, useClass:HashLocationStrategy}],
    bootstrap: [AppComponent]
})
export class AppModule {
}