import { Injectable } from '@angular/core';
import { MenuItem } from './restaurant.service';

@Injectable({
  providedIn: 'root',
})
export class FavoritesService {
  private readonly d = 'favorites';

  private favorites: MenuItem[] = [];

  constructor() {
    const storedFavorites = localStorage.getItem(this.d);
    if (storedFavorites) {
      this.favorites = JSON.parse(storedFavorites);
    }
  }

  getFavorites(): MenuItem[] {
    return this.favorites;
  }

  addToFavorites(item: MenuItem, restaurantName: string): void {
    const favoriteItem = { ...item, restaurantName };
    if (
      !this.favorites.some((fav) => fav.name === item.name && fav.restaurantName === restaurantName)
    ) {
      this.favorites.push(favoriteItem);
      this.saveFavorites();
    }
  }

  removeFromFavorites(item: MenuItem): void {
    this.favorites = this.favorites.filter(
      (fav) =>
        !(fav.name === item.name && fav.restaurantName === item.restaurantName)
    );
    this.saveFavorites();
  }

  clearFavorites(): void {
    this.favorites = [];
    localStorage.removeItem(this.d);
  }

  private saveFavorites(): void {
    localStorage.setItem(this.d, JSON.stringify(this.favorites));
  }
}
