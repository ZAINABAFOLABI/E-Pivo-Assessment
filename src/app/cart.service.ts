import { Injectable } from '@angular/core';
import { Product } from './product';
import { BehaviorSubject} from 'rxjs';
import{take,map} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor() {

    let existingCartItems = JSON.parse(localStorage.getItem('products')  || '{}') ;
    if (!existingCartItems) {
      existingCartItems = [];
    }
    this.itemsSubject.next(existingCartItems);
   }

   private itemsSubject = new BehaviorSubject<Product[]>([]);
  items$ = this.itemsSubject.asObservable();

  addToCart(product: Product) {
    this.items$.pipe(
      take(1),
      map((products:any) => {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
      }),
    ).subscribe();
  }
}
