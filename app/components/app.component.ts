import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app',
  template: `
      <a [routerLink]="['']">Home</a>
      <a [routerLink]="[{ outlets: { primary: 'home', aux: 'chat' } }]">OpenChat</a>
      <a [routerLink]="[{ outlets: { aux: null } }]">CloseChat</a>
      <a [routerLink]="['/product']">Product</a>
      <input type="button" value="Product" (click)="navigateToProduct()"/>
      <a [routerLink]="['/product', 1234]">ProductDetail</a>
      <br />
      <router-outlet></router-outlet>
      <router-outlet name="aux"></router-outlet>
    `
})

export class AppComponent {
  constructor(private router: Router) {
  }

  navigateToProduct() {
    this.router.navigate([ '/product' ]);
  }
}