import { Injectable } from '@angular/core';
import { CartService } from '../cart.service';

@Injectable({
  providedIn: 'root'
})

export class CartService {

  items = [];

  constructor(
    private cartService: CartService
  ) { }

  addToCart(product) {
    this.items.push(product);
  }

  getItems() {
    return this.items;
  }

  clearCart() {
    this.items = [];
    return this.items;
  }

}