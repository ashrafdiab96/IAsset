import { Component, Input } from '@angular/core';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { IconComponent } from '../icon/icon.component';
import { InputIcon } from '@Core/models/global.type';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [ProgressSpinnerModule, IconComponent],
  templateUrl: './button.component.html',
  styleUrl: './button.component.scss',
})

export class ButtonComponent {
  @Input() isLoading: boolean = false;
  @Input() isDisabled: boolean = false;
  @Input() type: string = 'submit';
  @Input() leftIcon?: InputIcon;
  @Input() rightIcon?: InputIcon;
  @Input() styles?: string;
  @Input() class?: string;
  @Input() onClick!: () => void;
}