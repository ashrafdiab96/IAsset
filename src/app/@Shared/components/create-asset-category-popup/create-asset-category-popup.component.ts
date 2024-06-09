import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CustomButtonComponent } from '../custom-button/custom-button.component';
import { CategoryItemComponent } from '../category-item/category-item.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-create-asset-category-popup',
  standalone: true,
  imports: [IconComponent, CustomButtonComponent, CategoryItemComponent, CommonModule],
  templateUrl: './create-asset-category-popup.component.html',
  styleUrl: './create-asset-category-popup.component.scss'
})
export class CreateAssetCategoryPopupComponent {
  selectedCategory: any;

  @Input() open: boolean = false;
  @Input() options: any[] = [];
  @Input() togglePopup!: () => void;

  @Output() handleSelect: EventEmitter<{ value: string }> = new EventEmitter<{ value: string }>();
  @Output() handleSelectedCategory: EventEmitter<{ value: any; label: any; }> = new EventEmitter<{ value: any; label: any; }>();

  filteredOptions: any[] = [];

  ngOnInit() {
    this.addLevelProperty(this.options);
  };

  addLevelProperty(categories: any[], level: number = 0) {
    categories.forEach(category => {
      category.level = level;
      if (category.childrens) {
        this.addLevelProperty(category.childrens, level + 1);
      }
    });
  };

  handleSearch = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const value = input.value.trim().toLowerCase();
    this.filteredOptions = this.options.filter(opt => {
      return opt.label.toLowerCase().includes(value);
    });
  };

  handleSelectCategory = (event: any) => {
    this.selectedCategory = event;
    this.handleSelectedCategory.emit(event);
  };

  closePopup = () => {
    // this.selectedCategory = null;
    this.togglePopup();
  };

  saveCategory = () => {
    this.togglePopup();
  };

}
