import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RestaurantService } from '../restaurant.service';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-filtered-restaurents',
  standalone: true,
  imports: [CommonModule,NavbarComponent],
  templateUrl: './filtered-restaurents.component.html',
  styleUrls: ['./filtered-restaurents.component.css'],
})


export class FilteredRestaurentsComponent {
  itemName: string | null = null;
  filteredRestaurants: any[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private restaurantService: RestaurantService
  ) {}

  ngOnInit(): void {
    this.itemName = this.route.snapshot.paramMap.get('itemName');
    if (this.itemName) {
      this.filteredRestaurants = this.restaurantService.getRestaurantsByItem(
        this.itemName
      );
    }
  }

  viewRestaurantDetails(restaurantName: string): void {
    this.router.navigate(['/restaurant', restaurantName]);
  }
}
