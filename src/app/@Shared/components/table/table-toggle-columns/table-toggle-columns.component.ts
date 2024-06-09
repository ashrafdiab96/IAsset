import { Component, Input } from '@angular/core';
import { DropdownComponent } from '@Shared/components/dropdown/dropdown.component';
import { IconComponent } from '@Shared/components/icon/icon.component';

@Component({
  selector: 'app-table-toggle-columns',
  standalone: true,
  imports: [
    DropdownComponent,
    IconComponent
  ],
  templateUrl: './table-toggle-columns.component.html',
  styleUrl: './table-toggle-columns.component.scss'
})

export class TableToggleColumnsComponent {
  @Input() keys: { key: string, label: string }[] = [];
  @Input() selectedItems: any[] = [];

  colsDropdownShown: boolean = false;

  constructor() { };

  ngOnInit () {
    // this.keys = [{  key: 'id', label: 'Id' }]
    console.log('selectedItems', this.selectedItems)
  }

  toggleShowColsDropdown(): void {
    this.colsDropdownShown = !this.colsDropdownShown;
  };

  onColsDropdownShownChange(isShown: boolean): void {
    this.colsDropdownShown = isShown;
  };

  onFilteredOptionsChange(event: { filteredOptions: any[], value: string }) {
    const filteredOptions = event.filteredOptions;
    const value = event.value;
    console.log('event.filteredOptions', event.filteredOptions)
    console.log('event.value', event.value)
    if (value === '' || value === null) {
      this.keys = this.keys;
    } else {
      this.keys = filteredOptions;
    }
  };
}
