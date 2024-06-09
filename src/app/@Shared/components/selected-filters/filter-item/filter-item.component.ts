import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { MultiSelectModule } from 'primeng/multiselect';

@Component({
  selector: 'app-filter-item',
  standalone: true,
  imports: [
    IconComponent,
    MultiSelectModule,
    FormsModule,
    CommonModule
  ],
  templateUrl: './filter-item.component.html',
  styleUrl: './filter-item.component.scss'
})
export class FilterItemComponent {
  @Input() data!: any[];
  @Input() selectedData!: any[];
  @Input() placeholder: string = 'Select';

}
