import { Component, Input } from '@angular/core';
import { FilterItemComponent } from '../filter-item/filter-item.component';
import { FilterClearComponent } from '../filter-clear/filter-clear.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-selected-filters',
  standalone: true,
  imports: [
    FilterItemComponent,
    FilterClearComponent,
    CommonModule
  ],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})
export class SelectedFiltersComponent {
  @Input() isShow: boolean = false;

  filterOne: any[] = [];
  filterTwo: any[] = [];
  filterThree: any[] = [];

  ngOnInit() {
   this.filterOne = [
    {name: 'New York', id: 'NY'},
    {name: 'Rome', id: 'RM'},
    {name: 'London', id: 'LDN'},
    {name: 'Istanbul', id: 'IST'},
    {name: 'Paris', id: 'PRS'}
   ];
   
   this.filterTwo = [
    {name: 'New York', id: 'NY'},
    {name: 'Rome', id: 'RM'},
    {name: 'London', id: 'LDN'},
    {name: 'Istanbul', id: 'IST'},
    {name: 'Paris', id: 'PRS'}
   ];

   this.filterThree = [
    {name: 'New York', id: 'NY'},
    {name: 'Rome', id: 'RM'},
    {name: 'London', id: 'LDN'},
    {name: 'Istanbul', id: 'IST'},
    {name: 'Paris', id: 'PRS'}
   ];
  }
}
