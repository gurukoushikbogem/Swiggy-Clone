import { Routes } from '@angular/router';
import { FilteredRestaurentsComponent } from './filtered-restaurents/filtered-restaurents.component';
import { RestaurantDetailsComponent } from './restaurant-details/restaurant-details.component';
import { CartComponent } from './cart/cart.component';
import { FavouritesComponent } from './favourites/favourites.component';
import { HeroSectionComponent } from './hero-section/hero-section.component';

export const routes: Routes = [
  { path: '', component: HeroSectionComponent },
  { path: 'restaurant/:name', component: RestaurantDetailsComponent },
  { path: 'restaurants/:itemName', component: FilteredRestaurentsComponent },
  { path: 'cart', component: CartComponent },
  { path: 'favourites', component: FavouritesComponent },
];
