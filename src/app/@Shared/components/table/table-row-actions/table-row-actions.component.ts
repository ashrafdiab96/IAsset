import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { TableDropdownComponent } from '../table-dropdown/table-dropdown.component';

@Component({
  selector: 'app-table-row-actions',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    TableDropdownComponent
  ],
  templateUrl: './table-row-actions.component.html',
  styleUrl: './table-row-actions.component.scss'
})
export class TableRowActionsComponent {
  @Input() maintenance: boolean = false;
  @Input() print: boolean = false;
  @Input() transfer: boolean = false;
  @Input() details: boolean = false;
  @Input() remove: boolean = false;

  options: any[] = [];

  ngOnInit () {
    this.options = [
      this.maintenance ? { label: 'Maintenance', icon: 'build', } : null,
      this.print ? { label: 'Print', icon: 'barcode', } : null,
      this.transfer ? { label: 'Transfer', icon: 'north_east', } : null,
      this.details ? { label: 'Details', icon: 'arrow_forward', } : null,
      this.remove ? { label: 'Remove', icon: 'delete_outline', color: 'var(--error-200)' } : null,
    ];
  };

}
