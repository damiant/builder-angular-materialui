import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';

export interface NavigationItem {
  id: string;
  label: string;
  icon: string;
  selected?: boolean;
}

@Component({
  selector: 'app-navigation-layout',
  standalone: true,
  imports: [
    CommonModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
  ],
  templateUrl: './navigation-layout.component.html',
  styleUrls: ['./navigation-layout.component.scss'],
})
export class NavigationLayoutComponent {
  headerItem = {
    label: 'Single-line item',
    subtitle: 'Secondary text',
    icon: 'account_box',
  };

  navigationItems: NavigationItem[] = [
    { id: 'item1', label: 'Item 1', icon: 'add', selected: false },
    { id: 'item2', label: 'Item 2', icon: 'add', selected: true },
    { id: 'item3', label: 'Item 3', icon: 'add', selected: false },
  ];

  cardData = {
    title: 'Card title',
    subtitle: 'Subtitle text',
    content:
      'Greyhound divisively hello coldly wonderfully marginally far upon excluding.',
    actions: [
      { label: 'Action 1', id: 'action1' },
      { label: 'Action 2', id: 'action2' },
    ],
  };

  onNavigationItemClick(item: NavigationItem): void {
    // Reset all items
    this.navigationItems.forEach((navItem) => (navItem.selected = false));
    // Set selected item
    item.selected = true;
    console.log('Navigation item clicked:', item.label);
  }

  onCardAction(actionId: string): void {
    console.log('Card action clicked:', actionId);
  }
}
