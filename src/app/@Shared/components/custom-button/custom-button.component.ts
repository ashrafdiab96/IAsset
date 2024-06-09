import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-custom-button',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule
  ],
  templateUrl: './custom-button.component.html',
  styleUrl: './custom-button.component.scss'
})
export class CustomButtonComponent {
  @Input() text: string = '';
  @Input() leftIcon?: { name: string; size?: number; color?: string };
  @Input() rightIcon?: { name: string; size?: number; color?: string };
  @Input() styles?: string;
  @Input() class?: string;
  @Input() onClick!: () => void;
}
