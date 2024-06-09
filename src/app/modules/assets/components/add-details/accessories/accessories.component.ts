import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CustomButtonComponent } from '@Shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-accessories',
  standalone: true,
  imports: [
    CustomButtonComponent
  ],
  templateUrl: './accessories.component.html',
  styleUrl: './accessories.component.scss'
})

export class AccessoriesComponent {

  constructor(private router: Router) {};

  addAccessories = () => {
    this.router.navigate(['/assets/create/assign-accessories/list']);
  };
}
