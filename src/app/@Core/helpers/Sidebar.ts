import { inject } from '@angular/core';
import { SidebarService } from '@Core/services/sidebar.service';

export class Sidebar {
  isSidebarOpen: boolean = false;
  sidebarService = inject(SidebarService);
  constructor() {
    this.sidebarService.isOpen$.subscribe({
      next: result => {
        this.isSidebarOpen = result;
      },
    });
  }
  
}
