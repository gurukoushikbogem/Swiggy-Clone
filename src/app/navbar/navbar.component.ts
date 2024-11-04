import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  isLoggedIn: boolean = false;
  user: any = null;

  isMenuOpen: boolean = false;

  toggleMenu() {
    this.isMenuOpen = !this.isMenuOpen;
  }

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.authService.loggedIn$.subscribe((status: boolean) => {
      this.isLoggedIn = status;
      if (this.isLoggedIn) {
        this.user = this.authService.getUser();
      } else {
        this.user = null;
      }
    });
  }

  handleAuthAction() {
    if (this.isLoggedIn) {
      this.authService.logout();
    } 
  }
}
