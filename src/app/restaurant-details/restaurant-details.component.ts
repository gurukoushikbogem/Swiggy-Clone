import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { RestaurantService, MenuItem } from '../restaurant.service';
import { CartService } from '../cart.service';
import { FavoritesService } from '../favourites.service';
import { AuthService } from '../auth.service';
import { Observable, of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-restaurant-details',
  templateUrl: './restaurant-details.component.html',
  imports: [CommonModule,  NavbarComponent,RouterModule],
  standalone: true,
  styleUrls: ['./restaurant-details.component.css'],
})
export class RestaurantDetailsComponent implements OnInit {
  restaurantItems: MenuItem[] = [];
  restaurantName: string = '';
  isLoggedIn = false;

  constructor(
    private route: ActivatedRoute,
    private restaurantService: RestaurantService,
    private cartService: CartService,
    private favoritesService: FavoritesService,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    // Subscribe to the loggedIn observable
    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
    });

    this.route.params.subscribe((params) => {
      this.restaurantName = params['name'];
      this.restaurantItems = this.restaurantService.getRestaurantItemsByName(
        this.restaurantName
      );

      this.restaurantItems.forEach(
        (item) => (item.quantity = item.quantity ?? 0)
      );
    });
  }

  addToCart(item: MenuItem): void {
    item.quantity = 1;
    this.cartService.addItem(item, this.restaurantName);
  }

  increaseQuantity(item: MenuItem): void {
    item.quantity! += 1;
    this.cartService.addItem(item, this.restaurantName);
  }

  decreaseQuantity(item: MenuItem): void {
    if (item.quantity && item.quantity > 1) {
      item.quantity -= 1;
    } else {
      item.quantity = 0;
    }
    this.cartService.addItem(item, this.restaurantName);
  }

  likeItem(item: MenuItem) {
    if (this.isLoggedIn) {
      item.liked = !item.liked;
      if (item.liked) {
        this.favoritesService.addToFavorites(item, this.restaurantName); 
      } else {
        this.favoritesService.removeFromFavorites(item);
      }
    } else {
      alert('Please log in to add items to favorites.');
    }
  }
}
