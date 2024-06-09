import { IconComponent } from '@Shared/components/icon/icon.component';
import { Component } from '@angular/core';
import { SearchInputComponent } from '../search-input/search-input.component';
import { CheckInOutSelectComponent } from '../check-in-out-select/check-in-out-select.component';
import { Sidebar } from '@Core/helpers/Sidebar';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [IconComponent, SearchInputComponent, CheckInOutSelectComponent, CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent extends Sidebar {}
