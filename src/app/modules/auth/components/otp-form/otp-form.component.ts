import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { Validators } from '@angular/forms';
import { InputOtpModule } from 'primeng/inputotp';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';

@Component({
  selector: 'app-otp-form',
  standalone: true,
  imports: [InputOtpModule, IconComponent, CommonModule],
  templateUrl: './otp-form.component.html',
  styleUrl: './otp-form.component.scss',
})
export class OtpFormComponent extends SubmitCoreForm {
  @Output() isOtpVerified = new EventEmitter<boolean>(false);
  private _remainingTime = new BehaviorSubject<number>(180); // Adjust starting time in seconds
  remainingTime$ = this._remainingTime.asObservable();

  startCountdown() {
    const intervalId = setInterval(() => {
      const currentTime = this._remainingTime.getValue();
      if (currentTime > 0) {
        this._remainingTime.next(currentTime - 1);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }

  resetCountdown() {
    this._remainingTime.next(60); // Reset to starting time
  }

  ngOnInit(): void {
    this.createForm();
  }
  ngAfterContentInit(): void {
    this.startCountdown();
  }
  createForm() {
    this.form = this.fb.group({
      otp: ['', [Validators.required]],
    });
  }
  checkOtpVerified() {
    this.isOtpVerified.emit(true);
  }
}
