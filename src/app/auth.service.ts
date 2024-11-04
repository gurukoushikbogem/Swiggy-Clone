import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { FavoritesService } from './favourites.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private loggedIn = new BehaviorSubject<boolean>(this.checkLoggedInStatus());
  loggedIn$ = this.loggedIn;

  constructor(private favoritesService: FavoritesService) {}

  private checkLoggedInStatus(): boolean {
    return !!localStorage.getItem('user');
  }

  login(user: any): void {
    localStorage.setItem('user', JSON.stringify(user));
    this.loggedIn.next(true);
  }

  logout(): void {
    localStorage.removeItem('user');
    this.loggedIn.next(false);
    this.favoritesService.clearFavorites();
  }

  getUser(): any {
    return JSON.parse(localStorage.getItem('user') || '{}');
  }
}
