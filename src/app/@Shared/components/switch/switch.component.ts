import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-switch',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './switch.component.html',
  styleUrl: './switch.component.scss'
})
export class SwitchComponent {
  @Input() checked: boolean = false;
  @Input() label: string = '';
  @Input() toggleSwitch!: () => void;
}
