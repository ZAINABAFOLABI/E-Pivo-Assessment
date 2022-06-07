import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/product';
import { CartService } from 'src/app/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[];
  cartNumber: any;
  cartItems: any;
  cartCounts: any;
  items: Array<{
    prodId: any;
    name: any;
    img: any;
    price: any;
    quantity: any;
  }> = [];

  constructor(private CartService: CartService) {
    this.products = [
      {
        prodId: 1,
        img: 'assets/images/Dove body lotion.jpg',
        name: 'Dove body lotion',
        price: 200,
        quantity: 1,
      },
      {
        prodId: 2,
        img: 'assets/images/Olay Age defying set.jpg',
        name: 'Olay Age defying set',
        price: 300,
        quantity: 1,
      },
      {
        prodId: 3,
        img: 'assets/images/Olay body cream.jpg',
        name: 'Olay body cream',
        price: 220,
        quantity: 1,
      },
    ];
  }

  ngOnInit() {
    this.cartCounts = JSON.parse(localStorage.getItem('cartNumber') || '{}');
  }

  addToCart(product: any) {
    console.log(product);

    this.items.push(product);
    console.log(this.items);
    this.cartNumber = localStorage.setItem(
      'cartNumber',
      JSON.stringify(this.items.length)
    );

    localStorage.setItem('products', JSON.stringify(this.items));
    this.cartCounts = JSON.parse(localStorage.getItem('cartNumber') || '{}');
  }
}
