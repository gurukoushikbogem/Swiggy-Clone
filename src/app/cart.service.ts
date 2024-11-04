import { Injectable } from '@angular/core';
import { MenuItem } from './restaurant.service';

@Injectable({
  providedIn: 'root',
})

export class CartService {
  private items: MenuItem[] = [];
  private currentRestaurant: string | null = null;

  constructor() {}

  addItem(item: MenuItem, restaurantName: string) {
    
    if (this.currentRestaurant && this.currentRestaurant !== restaurantName) {
      this.clearCart();
    }

    this.currentRestaurant = restaurantName; // Store the restaurant name
    const existingItem = this.items.find((i) => i.name === item.name);
    if (existingItem) {
      existingItem.quantity = item.quantity;
    } else {
      this.items.push({ ...item });
    }
  }

  getItems() {
    return this.items.filter((item) => item.quantity && item.quantity > 0);
  }

  getTotalPrice(): number {
    return this.items
      .filter((item) => item.quantity && item.quantity > 0)
      .reduce((total, item) => total + item.price * item.quantity!, 0);
  }

  clearCart() {
    this.items = [];
    this.currentRestaurant = null;
  }

  getCurrentRestaurant(): string | null {
    return this.currentRestaurant;
  }
}
