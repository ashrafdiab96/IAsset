import { Component } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { CreateAssetSelectComponent } from '@Shared/components/create-asset-select/create-asset-select.component';
import { CustomButtonComponent } from '@Shared/components/custom-button/custom-button.component';
import { DatepickerInpComponent } from '@Shared/components/datepicker-inp/datepicker-inp.component';
import { InputComponent } from '@Shared/components/input/input.component';
import { SwitchComponent } from '@Shared/components/switch/switch.component';

@Component({
  selector: 'app-add-inventory',
  standalone: true,
  imports: [
    CreateAssetSelectComponent,
    InputComponent,
    ReactiveFormsModule,
    DatepickerInpComponent,
    CustomButtonComponent,
    SwitchComponent
  ],
  templateUrl: './add-inventory.component.html',
  styleUrl: './add-inventory.component.scss'
})

export class AddInventoryComponent extends SubmitCoreForm {
  selectedPerson: any;
  selectedWarehouse: any;
  yearly: boolean = false;
  towYears: boolean = false;
  sixMonths: boolean = false;
  sameDateEveryYear: boolean = false;
  persons: any[] = [
    { label: 'Jasim Ali', value: 1, image: 'Profile.png' },
    { label: 'Mohammed Ahmed', value: 2, image: 'Profile.png' },
    { label: 'Mike Junior', value: 3, image: 'Profile.png' },
  ];
  warehouses: any[] = [
    { label: 'Doha', value: 1, },
    { label: 'Al Rayyan', value: 2, },
  ];

  ngOnInit() {
    this.form = this.fb.group({
      person: ['', []],
      srockQty: ['', []],
      minQty: ['', []],
      maxQty: ['', []],
      maintenanceSchedule: ['', []],
      sameDateEveryYear: ['', []],
      warehouse: ['', []],
      zone: ['', []],
      shelf: ['', []],
      cell: ['', []],
      maintenanceDate: ['', []],
    });
  };

  handleSelectVendor = (event: any) => {
    this.form.patchValue({
      person: event.value
    });
    this.selectedPerson = event;
  };

  handleYearlyClick = () => {
    this.yearly = true;
    this.towYears = false;
    this.sixMonths = false;
    this.form.patchValue({
      maintenanceSchedule: 'yearly'
    });
  };

  handleTwoYearlyClick = () => {
    this.yearly = false;
    this.towYears = true;
    this.sixMonths = false;
    this.form.patchValue({
      maintenanceSchedule: 'towYears'
    });
  };
  
  handleSixMonthsClick = () => {
    this.yearly = false;
    this.towYears = false;
    this.sixMonths = true;
    this.form.patchValue({
      maintenanceSchedule: 'sixMonths'
    });
  };

  toggleSameDateEveryYear = () => {
    this.form.patchValue({
      sameDateEveryYear: !this.sameDateEveryYear
    });
    this.sameDateEveryYear = !this.sameDateEveryYear;
  };

  handleSelectWarehouse = (event: any) => {
    this.form.patchValue({
      warehouse: event.value
    });
    this.selectedWarehouse = event;
  };

  handleMaintenanceDate = (event: any) => {
    this.form.patchValue({
      maintenanceDate: event
    });
  };

}
