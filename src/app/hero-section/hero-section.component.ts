import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from '../api.service';
import { FoodItemsComponent } from '../food-items/food-items.component';
import { PromotionBannerComponent } from '../promotion-banner/promotion-banner.component';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule,FoodItemsComponent,PromotionBannerComponent,FooterComponent],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.css'],
})

export class HeroSectionComponent implements OnInit {
  isDrawerOpen: boolean = false;
  isLoginMode: boolean = true;
  isUserLoggedIn: boolean = false;

  phoneNumber: string = '';
  name: string = '';
  email: string = '';

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.isUserLoggedIn = !!localStorage.getItem('user');
  }

  toggleDrawer() {
    this.isDrawerOpen = !this.isDrawerOpen;
  }

  toggleMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onContinue() {
    if (this.isLoginMode) {
      this.apiService.loginUser(this.phoneNumber).subscribe({
        next: (response) => {
          if (response.length > 0) {
            const userData = response[0];
            alert('Login successful!');
            localStorage.setItem('user', JSON.stringify(userData));
            this.isUserLoggedIn = true;
            this.resetForm();
          } else {
            alert('Invalid phone number or user not found.');
          }
        },
        error: (error) => {
          alert('Login failed. Please try again.');
        },
      });
    } else {
      const userData = {
        phoneNumber: this.phoneNumber,
        name: this.name,
        email: this.email,
      };

      this.apiService.createUser(userData).subscribe({
        next: (response) => {
          alert('Sign up successful!');
          this.resetForm();
          this.toggleMode();
        },
        error: (error) => {
          alert('Failed to sign up. Please try again.');
        },
      });
    }
  }

  resetForm() {
    this.phoneNumber = '';
    this.name = '';
    this.email = '';
  }

  logOut() {
    localStorage.removeItem('user');
    this.isUserLoggedIn = false;
    alert('Logged out successfully!');
  }
}
