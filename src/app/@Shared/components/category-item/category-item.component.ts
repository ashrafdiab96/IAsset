import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-category-item',
  standalone: true,
  imports: [CommonModule, IconComponent],
  templateUrl: './category-item.component.html',
  styleUrl: './category-item.component.scss'
})

export class CategoryItemComponent {
  @Input() category!: any;
  @Input() index!: number;
  @Input() selectedCategory: any;

  @Output() onCategorySelected: EventEmitter<{ value: any; label: any; }> = new EventEmitter<{ value: any; label: any; }>();

  isOpen = false;

  ngOnInit() {

  }

  toggle() {
    this.isOpen = !this.isOpen;
  };
  
  getPadding(level: number): string {
    return `0 ${20 * (level+1)}px`;
  };

  onClickIItem = (category: any) => {
    this.onCategorySelected.emit(category);
  };

}
