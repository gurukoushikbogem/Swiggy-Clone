import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MenuItem } from '../restaurant.service';
import { CartService } from '../cart.service';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule, NavbarComponent, RouterModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent implements OnInit {
  cartItems: MenuItem[] = [];
  totalPrice: number = 0;
  restaurantName: string = '';
  isLoggedIn: boolean = false;
  userName: string = '';

  constructor(
    private cartService: CartService,
    private http: HttpClient,
    private route: ActivatedRoute,
    private authService: AuthService
  ) {}

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.totalPrice = this.cartService.getTotalPrice();

    this.route.params.subscribe((params) => {
      this.restaurantName =
        params['restaurantName'] || this.cartService.getCurrentRestaurant();
    });

    this.authService.loggedIn$.subscribe((status) => {
      this.isLoggedIn = status;
      if (this.isLoggedIn) {
        this.userName = this.authService.getUser();
      }
    });
  }

  onCheckout(): void {
    if (!this.isLoggedIn) {
      alert('You need to log in first to place an order!');
      return;
    }

    const orderData = {
      items: this.cartItems,
      total: this.totalPrice,
      date: new Date(),
      restaurant: this.restaurantName,
      name: this.userName,
    };

    this.http
      .post('https://6717e698b910c6a6e02a8097.mockapi.io/orders', orderData)
      .subscribe(
        (response) => {
          console.log('Order successfully placed:', response);
          alert('Order placed successfully!');
          this.cartService.clearCart();
        },
        (error) => {
          console.error('Error placing order:', error);
          alert('Error placing order. Please try again.');
        }
      );
  }
}
