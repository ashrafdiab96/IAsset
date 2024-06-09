import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, ElementRef } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MultiSelectModule } from 'primeng/multiselect';
// import {MatMenuModule} from '@angular/material/menu';
// import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-dropdown',
  standalone: true,
  imports: [CommonModule, FormsModule, MultiSelectModule,],
  templateUrl: './dropdown.component.html',
  styleUrl: './dropdown.component.scss'
})

export class DropdownComponent {
    @Input() options: any[] = [];
    @Input() multiple: boolean = false;
    @Input() isShown: boolean = false;
    @Input() withSearch: boolean = false;
    @Input() dropdownClass: string = '';
    @Input() title: string = '';
    @Input() selectedItems: any[] = [];
    @Output() selectionChange: EventEmitter<{ filteredOptions: any[], value: string }> = new EventEmitter<{ filteredOptions: any[], value: string }>();
    @Output() isShownChange: EventEmitter<boolean> = new EventEmitter();

    searchText: string = '';

    constructor(private elementRef: ElementRef) { };

    ngOnInit(): void { };

    close(): void {
        this.isShown = false;
    };

    onItemClick(option: any) {
        if (this.multiple) {
            const itemIndex = this.selectedItems.findIndex(i => i?.key?.toLowerCase() === option?.key?.toLowerCase());

            if (itemIndex !== -1) {
                this.selectedItems.splice(itemIndex, 1);
            } else {
                this.selectedItems.push(option);
            }
        } else {
            this.selectedItems = [option];
            this.isShown = false;
        }
        this.selectionChange.emit({ filteredOptions: this.selectedItems, value: this.searchText });
    };

    isSelected(option: any): boolean {
        return this.selectedItems.some(item => item.key === option.key);
    };

    getDisplayLabel(): string {
        if (this.selectedItems.length > 0) {
            return this.selectedItems.map(option => option.label).join(', ');
        } else {
            return 'Select';
        }
    };

    onDocumentClick = (event: MouseEvent) => {
        if (!this.elementRef.nativeElement.contains(event.target)) {
            this.isShown = false;
            this.isShownChange.emit(this.isShown);
        }
    };

    filterOptions(): void {
        const value = this.searchText.trim().toLowerCase();
        const filteredOptions = this.options.filter(option => option.label.toLowerCase().includes(value));
        this.selectionChange.emit({ filteredOptions: filteredOptions, value: value });
    };
}
