# Swiggy Clone

This project replicates Swiggy’s core frontend functionalities, focusing on user experience without backend integration. It uses a mock API to handle basic authentication and order data.

Demo Google Drive Link : https://drive.google.com/file/d/1URZWzKVAWOdWhdzl1XayzCS65cKufFag/view?usp=sharing

## Key Features

- **User Authentication**: Users must log in to place an order or add items to their favorites.
- **Login**: Based on phone number—if the entered phone number exists in the mock API, login is successful; otherwise, it fails.
- **Session-Based Favorites**: Favorite items are stored for the session. When the user logs out, the favorite items are cleared.
- **Mock API**: Manages user authentication, registration, and order data.
- **Search Bar**: Users can be even availaible to search items based on their input but only the items shown in images are avilaible .

## Services

### Restaurant Service
- Contains data on 15 restaurants, each offering 5 items and a restaurant image.
- Provides functionality to filter restaurants by name or item and fetch items available in a particular restaurant.

### API Service
- Handles user registration, storing user details in a mock database.
- Allows login checks by verifying if the user’s details exist in the mock API.

### Auth Service
- Manages login status through local storage, allowing for conditional component rendering based on login state.

### Cart Service
- Tracks prices in real time and ensures only items from the same restaurant can be added to the cart.

### Favorites Service
- Includes methods to add, remove, and clear items from the favorites section.

## Project Components

### Hero-Section Component
- Acts as the homepage, designed to replicate the Swiggy homepage UI.

### Food-Items Component
- Displays available items in each restaurant. Clicking on an item image redirects to a page showing restaurants where the selected item is available.

### Promotion-Banner Component
- Provides information on service availability areas and includes a QR code for app download.

### Footer Component
- Contains social media links and app download links for Android and iOS devices.

### Filtered-Restaurants Component
- Appears on the homepage; clicking an item directs users to this component, which fetches restaurant data via the restaurant service.

### Restaurant-Details Component
- Shows items available in a specific restaurant with a like button for adding items to favorites.

### Favorites Component
- Displays a user's favorite items, showing item details, restaurant, and price.

### Cart Component
- Includes the restaurant name and selected items for checkout.
- Upon successfully placing an order, the details are stored in the mock API.

# Swiggy

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.9.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
