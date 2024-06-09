import { Component } from '@angular/core';
import { LoginFormComponent } from '../components/login-form/login-form.component';
import { FormContainerComponent } from '../components/form-container/form-container.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  imports: [LoginFormComponent, FormContainerComponent],
  standalone: true,
})
export class LoginComponent {}
