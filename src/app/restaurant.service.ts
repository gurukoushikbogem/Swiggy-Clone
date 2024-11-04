import { Injectable } from '@angular/core';
import { of } from 'rxjs';

export interface MenuItem {
  name: string;
  price: number;
  quantity?: number;
  isFavorite?: boolean;
  liked?: boolean;
  restaurantName?: string;
}

@Injectable({
  providedIn: 'root',
})

export class RestaurantService {
  private restaurants = [
    {
      name: 'Shadaan Biryani House',
      id: 1,
      rating: 4.3,
      deliveryTime: '50-55 mins',
      distance: '3.5 km',
      image: 'assets/shadan.jpg',
      itemsAvailable: [
        { name: 'Biryani', price: 250 },
        { name: 'Shawarma', price: 150 },
        { name: 'Kebab', price: 200 },
        { name: 'Noodles', price: 180 },
        { name: 'Ice Cream', price: 100 },
      ],
    },
    {
      name: 'Pizza Mania',
      id: 2,
      rating: 4.0,
      deliveryTime: '30-35 mins',
      distance: '2.0 km',
      image: 'assets/pizzamania.jpg',
      itemsAvailable: [
        { name: 'Pizza', price: 300 },
        { name: 'Pasta', price: 200 },
        { name: 'Salad', price: 120 },
        { name: 'Burger', price: 150 },
        { name: 'Pastry', price: 80 },
      ],
    },
    {
      name: 'Hyderabad Biryani Center',
      id: 3,
      rating: 4.5,
      deliveryTime: '45-50 mins',
      distance: '5.0 km',
      image: 'assets/dbiryani.jpg',
      itemsAvailable: [
        { name: 'Biryani', price: 280 },
        { name: 'Paratha', price: 100 },
        { name: 'Dosa', price: 120 },
        { name: 'Idli', price: 80 },
        { name: 'Ice Cream', price: 90 },
      ],
    },
    {
      name: 'Royal Chinese Hub',
      id: 4,
      rating: 3.8,
      deliveryTime: '40-45 mins',
      distance: '3.2 km',
      image: 'assets/gmomo.jpg',
      itemsAvailable: [
        { name: 'Chinese', price: 220 },
        { name: 'Noodles', price: 180 },
        { name: 'Momo', price: 140 },
        { name: 'Salad', price: 110 },
        { name: 'Cake', price: 130 },
      ],
    },
    {
      name: 'Cake Walk',
      id: 5,
      rating: 4.2,
      deliveryTime: '25-30 mins',
      distance: '1.8 km',
      image: 'assets/gcake.jpg',
      itemsAvailable: [
        { name: 'Cake', price: 150 },
        { name: 'Pastry', price: 60 },
        { name: 'Ice Cream', price: 90 },
        { name: 'Pavbhaji', price: 120 },
        { name: 'Salad', price: 100 },
      ],
    },
    {
      name: 'Spicy Shawarma',
      id: 6,
      rating: 4.1,
      deliveryTime: '35-40 mins',
      distance: '2.5 km',
      image: 'assets/gpasta.jpg',
      itemsAvailable: [
        { name: 'Shawarma', price: 140 },
        { name: 'Rolls', price: 100 },
        { name: 'Kebab', price: 190 },
        { name: 'Pasta', price: 160 },
        { name: 'Burger', price: 130 },
      ],
    },
    {
      name: 'Biryani Palace',
      id: 7,
      rating: 4.6,
      deliveryTime: '50-55 mins',
      distance: '4.2 km',
      image: 'assets/dumbiryani.jpg',
      itemsAvailable: [
        { name: 'Biryani', price: 300 },
        { name: 'Paratha', price: 80 },
        { name: 'Rolls', price: 120 },
        { name: 'South Indian', price: 150 },
        { name: 'Dosa', price: 90 },
      ],
    },
    {
      name: 'South Delight',
      id: 8,
      rating: 3.9,
      deliveryTime: '30-35 mins',
      distance: '2.1 km',
      image: 'assets/gidli.jpg',
      itemsAvailable: [
        { name: 'Dosa', price: 70 },
        { name: 'Idli', price: 50 },
        { name: 'South Indian', price: 150 },
        { name: 'Paratha', price: 100 },
        { name: 'Pavbhaji', price: 120 },
      ],
    },
    {
      name: 'Delhi Kebabs',
      id: 9,
      rating: 4.4,
      deliveryTime: '40-45 mins',
      distance: '3.7 km',
      image: 'assets/gkebab.jpg',
      itemsAvailable: [
        { name: 'Kebab', price: 220 },
        { name: 'Rolls', price: 130 },
        { name: 'Biryani', price: 260 },
        { name: 'Pasta', price: 180 },
        { name: 'Paratha', price: 90 },
      ],
    },
    {
      name: 'Noodles Corner',
      id: 10,
      rating: 4.0,
      deliveryTime: '30-35 mins',
      distance: '1.5 km',
      image: 'assets/gnoodles.jpg',
      itemsAvailable: [
        { name: 'Noodles', price: 160 },
        { name: 'Chinese', price: 190 },
        { name: 'Momo', price: 130 },
        { name: 'Salad', price: 100 },
        { name: 'Ice Cream', price: 70 },
      ],
    },
    {
      name: 'Mumbai Pavbhaji',
      id: 11,
      rating: 4.1,
      deliveryTime: '25-30 mins',
      distance: '2.8 km',
      image: 'assets/gpavbhaji.jpg',
      itemsAvailable: [
        { name: 'Pavbhaji', price: 130 },
        { name: 'Idli', price: 60 },
        { name: 'Rolls', price: 90 },
        { name: 'Salad', price: 110 },
        { name: 'Cake', price: 140 },
      ],
    },
    {
      name: 'Grill & Roast',
      id: 12,
      rating: 4.3,
      deliveryTime: '35-40 mins',
      distance: '3.0 km',
      image: 'assets/gburger.jpg',
      itemsAvailable: [
        { name: 'Burger', price: 140 },
        { name: 'Kebab', price: 220 },
        { name: 'Shawarma', price: 160 },
        { name: 'Rolls', price: 100 },
        { name: 'Pizza', price: 250 },
      ],
    },
    {
      name: 'The Italian Plate',
      id: 13,
      rating: 3.7,
      deliveryTime: '45-50 mins',
      distance: '4.5 km',
      image: 'assets/italian.jpg',
      itemsAvailable: [
        { name: 'Pizza', price: 300 },
        { name: 'Pasta', price: 200 },
        { name: 'Salad', price: 130 },
        { name: 'Pastry', price: 70 },
        { name: 'Ice Cream', price: 80 },
      ],
    },
    {
      name: 'Veggie Delight',
      id: 14,
      rating: 4.5,
      deliveryTime: '30-35 mins',
      distance: '2.6 km',
      image: 'assets/veggie.jpg',
      itemsAvailable: [
        { name: 'Salad', price: 100 },
        { name: 'Pavbhaji', price: 130 },
        { name: 'South Indian', price: 150 },
        { name: 'Dosa', price: 90 },
        { name: 'Idli', price: 60 },
      ],
    },
    {
      name: 'Chaat House',
      id: 15,
      rating: 3.9,
      deliveryTime: '20-25 mins',
      distance: '1.2 km',
      image: 'assets/chat.jpg',
      itemsAvailable: [
        { name: 'Pavbhaji', price: 120 },
        { name: 'Dosa', price: 80 },
        { name: 'Idli', price: 50 },
        { name: 'Rolls', price: 90 },
        { name: 'Paratha', price: 70 },
      ],
    },
  ];

  constructor() {}

  getRestaurants() {
    return this.restaurants;
  }

  getRestaurantItemsByName(name: string): MenuItem[] {
    const restaurant = this.restaurants.find((r) => r.name === name);
    return restaurant ? restaurant.itemsAvailable : [];
  }

  getRestaurantsByItem(itemName: string) {
    return this.restaurants.filter((restaurant) =>
      restaurant.itemsAvailable.some((item) => item.name === itemName)
    );
  }

  getRestaurantDetails(name: string) {
    const restaurant = this.restaurants.find((r) => r.name === name);
    return of(restaurant);
  }

  getRestaurantItems(restaurantId: number): MenuItem[] {
    const restaurant = this.restaurants[restaurantId];
    return restaurant ? restaurant.itemsAvailable : [];
  }
}
