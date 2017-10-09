import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'sellerDetail',
  template: '<h1>SellerDetail Component for: {{sellerId}}</h1>'
})

export class SellerDetailComponent {
  sellerId: string;

  constructor(route: ActivatedRoute) {
    this.sellerId = route.snapshot.params['id'];
  }
}