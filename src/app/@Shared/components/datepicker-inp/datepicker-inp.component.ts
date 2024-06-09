import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-datepicker-inp',
  standalone: true,
  imports: [CalendarModule, FormsModule, IconComponent, CommonModule],
  templateUrl: './datepicker-inp.component.html',
  styleUrl: './datepicker-inp.component.scss'
})

export class DatepickerInpComponent {
  @Input() required: boolean = false;
  @Input() disabled: boolean = false;
  @Input() label: string | null = null;
  @Output() selectedDate: EventEmitter<Date> = new EventEmitter<Date>();

  date: Date;

  constructor() {
    this.date = new Date();
    this.selectedDate.emit(this.date);
  };

  onDateSelect(event: any) {
    this.date = event;
    this.selectedDate.emit(event);
  };
}
