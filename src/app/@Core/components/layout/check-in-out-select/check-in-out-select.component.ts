import { IconComponent } from '@Shared/components/icon/icon.component';
import { Component, Input, signal } from '@angular/core';

interface Option {
  label: string;
}

@Component({
  selector: 'app-check-in-out-select',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './check-in-out-select.component.html',
  styleUrl: './check-in-out-select.component.scss',
})
export class CheckInOutSelectComponent {
  @Input() options: Option[] = [];
  @Input() label: string = '';
  isOpen = signal(false);

  toggleDropdown() {
    this.isOpen.update(e => !e);
  }
}
