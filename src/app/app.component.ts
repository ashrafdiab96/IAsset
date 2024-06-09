import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterModule, RouterOutlet } from '@angular/router';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { CommonModule } from '@angular/common';
import { InputComponent } from '@Shared/components/input/input.component';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ToastModule } from 'primeng/toast';
import { RippleModule } from 'primeng/ripple';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterModule,
    RouterOutlet,
    CommonModule,
    InputComponent,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'iAsset';
  contactForm: any = FormGroup;

  constructor(public fb: FormBuilder) {}
  ngOnInit(): void {
    this.createForm();
    localStorage.clear();
  }

  createForm() {
    this.contactForm = this.fb.group({
      userName: [
        '',
        [Validators.required, Validators.maxLength(50), Validators.pattern(/\S(?:\s*\S){2,}/)],
      ],
    });
  }

  get f() {
    return this.contactForm.controls;
  }
}
