import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'productDetail',
  template: '<h1 class="product-detail">ProductDetail Component for: {{productId}}</h1>',
  styles: [ '.product-detail {background: green}' ]
})

export class ProductDetailComponent {
  productId: string;
  isProd: string;

  constructor(route: ActivatedRoute) {
    this.productId = route.snapshot.params[ 'id' ];
    this.isProd = route.snapshot.data[ 0 ][ 'isProd' ];
  }
}