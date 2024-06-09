import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '@Shared/components/icon/icon.component';

@Component({
  selector: 'app-list-default-actions',
  standalone: true,
  imports: [IconComponent],
  templateUrl: './list-default-actions.component.html',
  styleUrl: './list-default-actions.component.scss'
})
export class ListDefaultActionsComponent {
  @Output() globalFilter = new EventEmitter<Event>();
  @Output() export = new EventEmitter<void>();
  
  @Input() withSearch: boolean = false;
  @Input() withExport: boolean = false;
  @Input() withImport: boolean = false;
  @Input() withCreate: boolean = false;
  @Input() withFilter: boolean = false;
  @Input() createText: string = '';
  @Input() searchText: string = '';
  @Input() searchIcon?: { name: string; color?: string; size?: number; };
  @Input() handleCreate!: () => void;

  onGlobalFilter(event: Event): void {
      this.globalFilter.emit(event);
  };

  onExport(): void {
      this.export.emit();
  };
  
}
