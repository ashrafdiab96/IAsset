import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CreateAssetCategoryPopupComponent } from '../create-asset-category-popup/create-asset-category-popup.component';

@Component({
  selector: 'app-create-asset-category',
  standalone: true,
  imports: [IconComponent, CreateAssetCategoryPopupComponent],
  templateUrl: './create-asset-category.component.html',
  styleUrl: './create-asset-category.component.scss'
})

export class CreateAssetCategoryComponent {
  @Input() required: boolean = false;
  @Input() topLabel: string | null = null;
  @Input() label: string | null = null;
  @Input() open: boolean = false;
  @Input() options: any[] = [];

  @Output() handleSelectedCategory: EventEmitter<{ value: any; label: any; }> = new EventEmitter<{ value: any; label: any; }>();

  selectedName: string | null = null;

  toggleCategoriesPopup = () => {
    this.open = !this.open;
  };

  handleCategory = (event: any) => {
    this.handleSelectedCategory.emit(event);
  };

}
