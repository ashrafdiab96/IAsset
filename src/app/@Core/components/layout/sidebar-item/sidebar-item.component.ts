import { Sidebar } from '@Core/helpers/Sidebar';
import { ISidebarLinks } from '@Core/models/sidebar-type';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component, Input, SimpleChanges } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-sidebar-item',
  standalone: true,
  imports: [CommonModule, IconComponent , RouterModule],
  templateUrl: './sidebar-item.component.html',
  styleUrl: './sidebar-item.component.scss',
})
export class SidebarItemComponent extends Sidebar {
  @Input() item!: ISidebarLinks;
  @Input() isActive: boolean = false;
  @Input() isChild: boolean = false;

  constructor() {
    super();
  }
}
