import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-hero-section',
  standalone: true,
  imports: [
    CommonModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    RouterModule,
  ],
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent {
  navigationItems = [
    { label: 'CATALOGUE', route: '/catalogue' },
    { label: 'FASHION', route: '/fashion' },
    { label: 'FAVOURITE', route: '/young-favourite' },
    { label: 'LIFESTYLE', route: '/lifestyle' },
  ];

  brandLogos = [
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bf658d4725621198999d0b4e551a3be97a923fbb',
      alt: 'H&M',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/9b6810bc3f2143edf37818ea1658dc4d9a050b9c',
      alt: 'OBEY',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/54c391483a518fc732471718d91c143746f67854',
      alt: 'Shopify',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/ecac30a21750dc142e68d33b47b8c18ec57a7597',
      alt: 'Lacoste',
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/39889326d1bd8bbfa4081d8f3fb8e7912543bcd9',
      alt: "Levi's",
    },
    {
      src: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c47b581dc4de4250c1706623a55b960bbfff6038',
      alt: 'Amazon',
    },
  ];

  constructor() {}
}
