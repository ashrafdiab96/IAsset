import { IconComponent } from '@Shared/components/icon/icon.component';
import { Component, Input, signal } from '@angular/core';

interface Option {
  label: string;
  icon?: string;
  color?: string;
}

@Component({
  selector: 'app-table-dropdown',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './table-dropdown.component.html',
  styleUrl: './table-dropdown.component.scss'
})
export class TableDropdownComponent {
  @Input() options: Option[] = [];
  @Input() label: string = '';
  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update(e => !e);
  }
}
