import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { InputComponent } from '@Shared/components/input/input.component';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [CommonModule, InputComponent, ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.scss',
})
export class LoginFormComponent extends SubmitCoreForm {
  constructor(private cookieService: CookieService) {
    super();
  }

  ngOnInit(): void {
    this.createForm();
    // this.form.setErrors()
  }

  createForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(50)]],
    });
  }
  onSubmit() {
    this.goTo('/');
    this.cookieService.set('access-token', '454554544');
  }
}
