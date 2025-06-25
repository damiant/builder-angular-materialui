import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('./hero-section').then((m) => m.HeroSectionComponent),
  },
  {
    path: 'hero',
    loadComponent: () =>
      import('./hero-section').then((m) => m.HeroSectionComponent),
  },
  {
    path: 'young-favourite',
    loadComponent: () =>
      import('./young-favourite').then((m) => m.YoungFavouriteComponent),
  },
  {
    path: 'fashion',
    loadComponent: () => import('./fashion').then((m) => m.FashionComponent),
  },
  {
    path: 'company',
    loadComponent: () =>
      import('./company-details').then((m) => m.CompanyDetailsComponent),
  },
  {
    path: 'navigation',
    loadComponent: () =>
      import('./navigation-layout').then((m) => m.NavigationLayoutComponent),
  },
];
