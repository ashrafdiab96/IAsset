import { IconComponent } from '@Shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { AddDetailsComponent } from '../components/add-details/add-details.component';
import { AddInventoryComponent } from '../components/add-inventory/add-inventory.component';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    AddDetailsComponent,
    AddInventoryComponent
  ],
  templateUrl: './create.component.html',
  styleUrl: './create.component.scss'
})

export class CreateAssetComponent {
  currentTab: string = 'details';

  ngOnInit() {};

  changeTab = (tab: string) => {
    this.currentTab = tab;
  };
  
}
