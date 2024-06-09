import { Sidebar } from '@Core/helpers/Sidebar';
import { ISidebarLinks } from '@Core/models/sidebar-type';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SidebarItemComponent } from '../sidebar-item/sidebar-item.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, IconComponent, SidebarItemComponent],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent extends Sidebar {
  sidebarLinks: ISidebarLinks[] = [
    {
      label: 'Dashboard',
      icon: 'dashboard',
      link: '/',
    },
    {
      label: 'Alerts',
      icon: 'warning_amber',
      link: '/alerts',
    },
    {
      label: 'Assets',
      icon: 'extension',
      link: '/assets',

      children: [
        {
          label: 'Batches',
          icon: 'list_alt',
          link: '/batches',
        },
        {
          label: 'Bundles',
          icon: 'horizontal_split',
          link: '/batches',
        },
        {
          label: 'Check In/Out',
          icon: 'repeat',
          link: '/batches',
        },
        {
          label: 'Transfer',
          icon: 'north_east',
          link: '/batches',
        },
        {
          label: 'Manage Types',
          icon: 'category',
          link: '/batches',
        },
        {
          label: 'Manage Categories',
          icon: 'account_tree',
          link: '/batches',
        },
        {
          label: 'Manage Vendors ',
          icon: 'storefront',
          link: '/batches',
        },
      ],
    },
    {
      label: 'Maintenance',
      icon: 'build',
      link: 'maintenance',
    },
    {
      label: 'Facilities',
      icon: 'apartment',
      link: 'facilities',
    },
    {
      label: 'Map',
      icon: 'map',
      link: '/map',
    },
    {
      label: 'Inventory',
      icon: 'inventory_2',
      link: 'inventory',

      children: [
        {
          label: 'Stock',
          icon: 'content_paste_search',
          link: 'stock',
        },
      ],
    },
    {
      label: 'users',
      icon: 'person_search',
      link: '/users',
    },
    {
      label: 'Team',
      icon: 'groups',
      link: '/team',
    },
  ];
  constructor(private router: Router) {
    super();
  }
  isLinkActive(link: any) {
    const url = this.router.url;

    if (url === '/' && link === '/') return true;
    else if (link !== '/') {

      return url.includes(link);
    }
    return false
  }
}
