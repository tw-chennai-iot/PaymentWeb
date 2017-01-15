import { Component } from '@angular/core';
import { Http } from '@angular/http'
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'cart',
  template: `<h1>Cart</h1>
<div class="container-fluid">
<button style="background: blanchedalmond;width: 15%;">status: {{cart.status}}</button>
<div class="row-fluid">
Your items
</div>
<div class="row-fluid" *ngFor="let product of cart.products">
            <div class="span3 pro">
                <div class="pricing-table-header-pro">
                    <h2>{{product.name}}</h2>
                    <h3> ₹ {{product.price}}</h3>
                </div><div class="pricing-table-features">
                    <p><strong>size</strong></p>
                    <p><strong>desc</strong> </p>
                    <p><strong>colour</strong> </p>
                    <p><strong>brand</strong></p>
                </div>
            </div>
         </div>
</div>
<button style="background: darkgreen;width: 20%;" (click)="pay()" *ngIf="cart.status === 'unpaid'">Pay</button>
    `,
})
export class CartComponent {

  cart: any = {};
  cartId: string;

  constructor(private http: Http, private route: ActivatedRoute) {
    console.log("loading cart component");
    this.cartId = this.route.snapshot.params['id'];
    this.getCart(this.cartId).subscribe((cart) => {
      this.cart = cart;
    });
  }

  getCart(cartId) {
    return this.http
      .get('http://ec2-54-255-184-116.ap-southeast-1.compute.amazonaws.com:3000/cart/' + cartId)
      .map(response => response.json());
  }

  pay() {
    return this.http
      .post('http://ec2-54-255-184-116.ap-southeast-1.compute.amazonaws.com:3000/cart/' + this.cartId + '/pay', {})
      .map(response => response.json())
      .subscribe((cart) => this.cart = cart)
  }

}
