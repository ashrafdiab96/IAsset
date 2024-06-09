import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-asset-select',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './create-asset-select.component.html',
  styleUrl: './create-asset-select.component.scss'
})

export class CreateAssetSelectComponent {
  @Input() required: boolean = false;
  @Input() options: any[] = [];
  @Input() selectedValue: number | null = null;
  @Input() selectedName: string | null = null;
  @Input() selectLabel: string | null = null;
  @Input() withCreate: boolean = false;
  @Input() withSearch: boolean = false;
  @Input() withLabel: boolean = false;
  @Input() selectTopLabel: string | null = null;
  @Input() leftIcon: any;

  open: boolean = false;

  @Output() handleSelect: EventEmitter<{ value: string }> = new EventEmitter<{ value: string }>();

  filteredOptions: any[] = [];

  ngOnInit(): void {
    this.filteredOptions = [...this.options];
  };

  handleSearch = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    this.filteredOptions = this.options.filter(opt => {
      return opt.label.toLowerCase().includes(value);
    });
  };

  onItemClick = (option: any): void => {
    this.handleSelect.emit(option);
    this.toggleDropdown();
  };

  toggleDropdown = () => {
    this.open = !this.open;
  };

  getImage = (image: any) => {
    return `assets/img/${image}`;
  }

}
