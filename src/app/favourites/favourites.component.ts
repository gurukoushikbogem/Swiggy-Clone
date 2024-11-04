import { Component } from '@angular/core';
import { FavoritesService } from '../favourites.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { MenuItem } from '../restaurant.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-favourites',
  standalone: true,
  imports: [NavbarComponent,CommonModule],
  templateUrl: './favourites.component.html',
  styleUrl: './favourites.component.css',
})
export class FavouritesComponent {
  favorites: MenuItem[] = [];

  constructor(private favoritesService: FavoritesService) {}

  ngOnInit(): void {
    this.loadFavorites();
  }

  loadFavorites(): void {
    this.favorites = this.favoritesService.getFavorites();
  }

  removeFromFavorites(item: MenuItem): void {
    this.favoritesService.removeFromFavorites(item);
    this.loadFavorites(); 
  }
}
