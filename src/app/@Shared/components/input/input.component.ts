import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, Self } from '@angular/core';
import { ControlValueAccessor, FormControl, NgControl, ReactiveFormsModule } from '@angular/forms';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-input',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, IconComponent],
  templateUrl: './input.component.html',
  styleUrl: './input.component.scss',
})
export class InputComponent implements ControlValueAccessor {
  @Input() type = 'text';
  @Input() label?: string;
  @Input() placeholder: string = '';
  @Input() leftIcon?: { name: string; size?: number; color?: string };
  @Input() minLength: string | number | null = null;
  @Input() maxLength: string | number | null = null;
  @Input() patternMessage: string = '';
  @Input() style: string = '';
  @Input() withBorder: boolean = false;

  @Input() submitted = false;
  @Input() addRequiredAstrict = false;
  @Input() disabled = false;
  @Input() numbersOnly = false;
  @Input() readonly = false;
  @Input() showPasswordIcon = false;

  @Output() selectedValue = new EventEmitter<any>();

  constructor(@Self() public ngControl: NgControl) {
    this.ngControl.valueAccessor = this;
  }

  get control(): FormControl {
    return this.ngControl.control as FormControl;
  }

  onChange($event: any) {
    this.selectedValue.emit($event);
  }

  getFirstError(errors: any): string {
    return errors ? Object.keys(errors)[0] : '';
  }

  toggleShowPassword() {
    if (this.type === 'password') this.type = 'text';
    else this.type = 'password';
  }

  writeValue(obj: any): void {}
  registerOnChange(fn: any): void {}
  registerOnTouched(fn: any): void {}
  setDisabledState?(isDisabled: boolean): void {}
}
