import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { InputComponent } from '@Shared/components/input/input.component';
import { Component } from '@angular/core';
import { ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-change-password-form',
  standalone: true,
  imports: [InputComponent, ReactiveFormsModule],
  templateUrl: './change-password-form.component.html',
  styleUrl: './change-password-form.component.scss',
})
export class ChangePasswordFormComponent extends SubmitCoreForm {
  ngOnInit(): void {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      confirmPassword: [
        '',
        [Validators.required, Validators.minLength(8), Validators.maxLength(50)],
      ],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
}
