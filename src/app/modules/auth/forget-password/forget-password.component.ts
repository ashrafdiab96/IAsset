import { Component, signal } from '@angular/core';
import { FormContainerComponent } from '../components/form-container/form-container.component';
import { ForgetPasswordFormComponent } from '../components/forget-password-form/forget-password-form.component';
import { OtpFormComponent } from '../components/otp-form/otp-form.component';
import { ChangePasswordFormComponent } from '../components/change-password-form/change-password-form.component';

@Component({
  selector: 'app-forget-password',
  standalone: true,
  templateUrl: './forget-password.component.html',
  styleUrl: './forget-password.component.scss',
  imports: [
    FormContainerComponent,
    ForgetPasswordFormComponent,
    OtpFormComponent,
    ChangePasswordFormComponent,
  ],
})
export class ForgetPasswordComponent {
  isOtp = signal(false);
  isOtpVerified = signal(false);

  checkIfOtpVerified(event: boolean) {
    this.isOtp.set(false);
    this.isOtpVerified.set(true);
  }

  checkIfOtpSent(event: boolean) {
    this.isOtp.set(event);
  }
}
