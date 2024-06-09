import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { TableDropdownComponent } from '@Shared/components/table/table-dropdown/table-dropdown.component';
import { TableRowActionsComponent } from '@Shared/components/table/table-row-actions/table-row-actions.component';

@Component({
  selector: 'app-list-selected-actions',
  standalone: true,
  imports: [
    IconComponent,
    TableRowActionsComponent,
    TableDropdownComponent,
  ],
  templateUrl: './list-selected-actions.component.html',
  styleUrl: './list-selected-actions.component.scss'
})
export class ListSelectedActionsComponent {
  @Input() selectedRows: number = 5;

  @Output() export = new EventEmitter<void>();

  options: any[] = [];

  ngOnInit () {
    this.options = [
      { label: 'Remove', icon: 'delete_outline', color: 'var(--error-200)' }
    ];
  }

  onExport(): void {
    this.export.emit();
  }
}
