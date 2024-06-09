import { inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MessageService } from 'primeng/api';
import { Router } from '@angular/router';
import { Location } from '@angular/common';

export class SubmitCoreForm {
  fb = inject(FormBuilder);
  //   message = inject(MessageService);
  location = inject(Location);
  router = inject(Router);

  submitted: boolean = false;
  isLoading: boolean = false;
  
  editId: string | null = null;

  form!: FormGroup;

  get f(): any {
    return this.form ? this.form.controls : false;
  }

  setFormValue(data: any) {
    Object.keys(data).forEach(key => {
      if (this.f[key]) {
        this.f[key].setValue(data[key]);
        this.f[key].updateValueAndValidity();
      }
    });
  }

  resetComponent(emit = true) {
    this.isLoading = false;
    this.submitted = false;
    this.editId = '';
    this.form.reset();
    this.form.markAsPristine();
    this.form.markAsUntouched();
  }
  handleData() {
    const data: any = {};
    Object.keys(this.f).forEach(key => {
      if (this.f[key] && typeof this.f[key].value === 'string') {
        data[key] = this.f[key].value.trim();
      } else {
        data[key] = this.f[key].value;
      }
    });
    return data;
  }

  goTo(url: string): void {
    this.router.navigateByUrl(url)
  }
  
  navigateBack(): void {
    this.location.back();
  }
}
