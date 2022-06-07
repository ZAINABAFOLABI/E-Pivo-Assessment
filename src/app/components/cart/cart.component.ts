import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: any;
  updatedQuantity: any;
  subTotal: any;
  total: any;
  constructor() {}

  ngOnInit() {
    this.cartItems = JSON.parse(localStorage.getItem('products') || '{}');

    console.log(this.cartItems);
  }

  inc(cartItem: any) {
    if (cartItem.quantity != 5) {
      cartItem.quantity = cartItem.quantity + 1;
      console.log((this.subTotal = cartItem));
    }
    console.log(cartItem);
  }

  dec(cartItem: any) {
    if (cartItem.quantity > 1) {
      cartItem.quantity = cartItem.quantity - 1;
    }
  }

  removeCart(cartItem: any) {
    var index = this.cartItems.indexOf(cartItem);
    this.cartItems.splice(index, 1);
    console.log(cartItem);
    localStorage.setItem('cartNumber', JSON.stringify(this.cartItems.length));
  }
}
