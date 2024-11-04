import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';

interface FoodOption {
  name: string;
  image: string;
}

interface InstaMart {
  image: string;
}

@Component({
  selector: 'app-food-items',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule],
  templateUrl: './food-items.component.html',
  styleUrls: ['./food-items.component.css'],
})
export class FoodItemsComponent {
  searchQuery: string = '';

  onSearch() {
    if (this.searchQuery.trim()) {
      this.router.navigate([`/restaurants/${this.searchQuery}`]);
    }
  }

  foodOptions: FoodOption[] = [
    { name: 'Biryani', image: 'assets/biryani.jpg' },
    { name: 'Pizza', image: 'assets/pizza.jpg' },
    { name: 'Burger', image: 'assets/burger.jpg' },
    { name: 'Shawarma', image: 'assets/shawarma.jpg' },
    { name: 'Chinese', image: 'assets/chinese.jpg' },
    { name: 'Cake', image: 'assets/cake.jpg' },
    { name: 'Ice Cream', image: 'assets/icecream.jpg' },
    { name: 'Rolls', image: 'assets/rolls.jpg' },
    { name: 'South Indian', image: 'assets/south-indian.jpg' },
    { name: 'Dosa', image: 'assets/dosa.jpg' },
    { name: 'Momo', image: 'assets/momo.jpg' },
    { name: 'Pasta', image: 'assets/pasta.jpg' },
    { name: 'Paratha', image: 'assets/paratha.jpg' },
    { name: 'Pastry', image: 'assets/pastry.jpg' },
    { name: 'Kebab', image: 'assets/kebab.jpg' },
    { name: 'Noodles', image: 'assets/noodles.jpg' },
    { name: 'Idli', image: 'assets/idli.jpg' },
    { name: 'Pavbhaji', image: 'assets/pavbhaji.jpg' },
    { name: 'Salad', image: 'assets/salad.jpg' },
  ];
  instamart: InstaMart[] = [
    { image: 'assets/oil.jpg' },
    { image: 'assets/bread.jpg' },
    { image: 'assets/lays.jpg' },
    { image: 'assets/juice.jpg' },
    { image: 'assets/fruits.jpg' },
    { image: 'assets/mirchi.jpg' },
    { image: 'assets/maggi.jpg' },
    { image: 'assets/kissan.jpg' },
    { image: 'assets/ariel.jpg' },
    { image: 'assets/bru.jpg' },
    { image: 'assets/dove.jpg' },
  ];

  currentIndex = 0;
  itemsPerPage = 14;

  get visibleItems() {
    return this.foodOptions.slice(
      this.currentIndex,
      this.currentIndex + this.itemsPerPage
    );
  }
  get visibleItems1() {
    return this.instamart;
  }

  previous() {
    this.currentIndex = Math.max(this.currentIndex - this.itemsPerPage, 0);
  }

  next() {
    this.currentIndex = Math.min(
      this.currentIndex + this.itemsPerPage,
      this.foodOptions.length - this.itemsPerPage
    );
  }

  constructor(private router: Router) {}

  onItemSelect(itemName: string) {
    this.router.navigate(['/restaurants', itemName]);
  }
}
