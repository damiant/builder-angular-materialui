import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-young-favourite',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
    RouterModule,
  ],
  templateUrl: './young-favourite.component.html',
  styleUrls: ['./young-favourite.component.scss'],
})
export class YoungFavouriteComponent {
  favouriteItems = [
    {
      title: 'Trending on instagram',
      subtitle: 'Explore Now!',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/7f9f821869d9ef2015049224d5361211f5b59369',
      alt: 'Trending fashion on Instagram',
    },
    {
      title: 'All Under $40',
      subtitle: 'Explore Now!',
      image:
        'https://cdn.builder.io/api/v1/image/assets/TEMP/f72a6230304174d59541eeaf23a910c99d4e63c2',
      alt: 'Affordable fashion under $40',
    },
  ];

  mobileAppImages = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a6b749da691936fbeb04fe1439baa7620d7fb088',
      alt: 'Polkadot Red Dress',
      title: 'Polkadot Red Dress',
      price: 'Rs. 1,499.00',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/d51570f3eba46487aae57f317a8423a500261354',
      alt: 'Striped Pink Dress',
      title: 'Striped Pink Dress',
      price: 'Rs. 1,299.00',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07ef9dacfc812e7ad6c2baacaee649ac8b18cc20',
      alt: 'Blue Polkadot Dress',
      title: 'Blue Polkadot Dress',
      price: 'Rs. 1,199.00',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/3b1c3d6e30847906b484963f6e88af7727973bc3',
      alt: 'Green Skirt Pink Sweater',
      title: 'Green Skirt Pink Sweater',
      price: 'Rs. 999.00',
    },
  ];

  downloadLinks = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c10d05aab3152246e852f3f01458ba2cc5a2cb24',
      alt: 'Download on App Store',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/966f0435d0014005291bf2ca047db691656178a5',
      alt: 'Get it on Google Play',
    },
  ];

  constructor() {}
}
