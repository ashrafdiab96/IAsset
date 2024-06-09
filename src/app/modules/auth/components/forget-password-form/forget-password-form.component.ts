import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { InputComponent } from '@Shared/components/input/input.component';
import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output, output, signal } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';
import { ChangePasswordFormComponent } from '../change-password-form/change-password-form.component';

@Component({
  selector: 'app-forget-password-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule, ChangePasswordFormComponent],
  templateUrl: './forget-password-form.component.html',
  styleUrl: './forget-password-form.component.scss',
})
export class ForgetPasswordFormComponent extends SubmitCoreForm {
  @Output() isOtpSent = new EventEmitter<boolean>(false);

  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
    });
  }
  sendOtp() {
    this.isOtpSent.emit(true);
  }
}
