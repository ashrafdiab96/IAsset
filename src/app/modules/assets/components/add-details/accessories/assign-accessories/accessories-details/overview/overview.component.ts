import { Component, Input } from '@angular/core';
import { CustomButtonComponent } from '@Shared/components/custom-button/custom-button.component';
import { IconComponent } from '@Shared/components/icon/icon.component';
import moment from 'moment';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    IconComponent,
    CustomButtonComponent
  ],
  templateUrl: './overview.component.html',
  styleUrl: './overview.component.scss'
})
export class OverviewComponent {
  @Input() item: any;

  formatDate(date: Date): string {
    return date ? moment(date).format('DD - MMMM - YYYY') : '';
  }

}
