import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TableModule, Table } from 'primeng/table';
import { saveAs } from 'file-saver';
import * as XLSX from 'xlsx';
import { DropdownComponent } from '@Shared/components/dropdown/dropdown.component';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { TableRowActionsComponent } from '../table-row-actions/table-row-actions.component';
import { TableToggleColumnsComponent } from '../table-toggle-columns/table-toggle-columns.component';
import { SelectedFiltersComponent } from '@Shared/components/selected-filters/index/index.component';
import { ListDefaultActionsComponent } from '@Shared/components/list-actions/list-default-actions/list-default-actions.component';
import { ListSelectedActionsComponent } from '@Shared/components/list-actions/list-selected-actions/list-selected-actions.component';

@Component({
  selector: 'app-table',
  standalone: true,
  imports: [
    TableModule,
    CommonModule,
    DropdownComponent,
    ListDefaultActionsComponent,
    IconComponent,
    TableRowActionsComponent,
    TableToggleColumnsComponent,
    SelectedFiltersComponent,
    ListSelectedActionsComponent
],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class TableComponent  implements OnInit {
  @Input() data: any[] = [];
  @Input() withHeader: boolean = false;
  @Input() withSearch: boolean = false;
  @Input() withExport: boolean = false;
  @Input() withImport: boolean = false;
  @Input() withCreate: boolean = false;
  @Input() withFilter: boolean = false;
  @Input() createText: string = '';
  @Input() withSelectedFilters: boolean = false;
  @Input() withSelectedActions: boolean = false;
  @Input() searchText: string = '';
  @Input() searchIcon?: { name: string; color?: string; size?: number; };
  @Input() withSelect: boolean = false;
  @Input() defaultColumns: string[] = [];
  @Input() handleCreate!: () => void;

  @Output() selectedItemsChange: EventEmitter<any> = new EventEmitter<any[]>();

  displayedColumns: string[] = [];
  columnsConfig: { key: string, label: string }[] = [];
  keys: { key: string, label: string }[] = [];
  tableData: any[] = [];
  globalFilterFields: string[] = [];
  colsDropdownShown: boolean = false;
  selectedItems: any[] = [];
  selectedRows: any[] = [];

  constructor() { };

  ngOnInit(): void {
      this.tableData = this.data;
      this.columnsConfig = this.generateColumnsConfig(this.data);
      this.selectedItems = this.columnsConfig;
      this.keys = this.generateColumnsConfig(this.data);
      this.globalFilterFields = this.columnsConfig.map(col => col.key);
  };

  generateColumnsConfig(data: any[]): { key: string, label: string }[] {
      if (!data || data.length === 0) {
          return [];
      }
      const sampleData = data[0];
      return Object.keys(sampleData).map(key => ({
          key,
          label: this.formatColumnLabel(key)
      }));
  };

  formatColumnLabel(key: string): string {
      return key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').replace(/(^\w|\s\w)/g, m => m.toUpperCase());
  };

  applyGlobalFilter(event: Event): void {
      const input = event.target as HTMLInputElement;
      const value = input.value.trim().toLowerCase();
      this.tableData = this.data.filter((item: any) => {
          return this.globalFilterFields.some(field => {
              const fieldValue = item[field].toString().toLowerCase();
              return fieldValue.includes(value);
          });
      });
  };

  handleGlobalFilter(event: Event): void {
    this.applyGlobalFilter(event);
  };

  exportTable(table: any) {
      const worksheet = XLSX.utils.json_to_sheet(table);
      const workbook = XLSX.utils.book_new();
      XLSX.utils.book_append_sheet(workbook, worksheet, 'Data');
      XLSX.writeFile(workbook, 'TableData.xlsx');
  };

  handleExport(): void {
    this.exportTable(this.tableData);
  };

  onRowSelect(event: any) {
    this.emitSelectedItems();
  };

  onRowUnselect(event: any) {
    this.emitSelectedItems();
  };

  onSelectionChange(event: any) {
    this.emitSelectedItems();
  };

  emitSelectedItems() {
    this.selectedItemsChange.emit(this.selectedRows);
  };
}
