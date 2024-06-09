import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { CreateAssetCategoryComponent } from '@Shared/components/create-asset-category/create-asset-category.component';
import { CreateAssetSelectComponent } from '@Shared/components/create-asset-select/create-asset-select.component';
import { DatepickerInpComponent } from '@Shared/components/datepicker-inp/datepicker-inp.component';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { InputComponent } from '@Shared/components/input/input.component';
import { SelectComponent } from '@Shared/components/select/select.component';
import { SwitchComponent } from '@Shared/components/switch/switch.component';
import { UploadImagesComponent } from '@Shared/components/upload-images/upload-images.component';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [
    IconComponent,
    SwitchComponent,
    CommonModule,
    UploadImagesComponent,
    InputComponent,
    ReactiveFormsModule,
    SelectComponent,
    CreateAssetSelectComponent,
    DatepickerInpComponent,
    CreateAssetCategoryComponent
  ],
  templateUrl: './details.component.html',
  styleUrl: './details.component.scss'
})

export class DetailsComponent extends SubmitCoreForm {
  @ViewChild('warrentFileInput') warrentFileInput: ElementRef<HTMLInputElement> | undefined;

  hasSocialNumber: boolean = false;
  warranty: boolean = false;
  selectedTypeName: string | null = null;
  selectedVendorName: string | null = null;
  selectedCategory: any;
  warrentyFile: any;

  types: any[] = [
    { label: 'Electric', value: 1 },
    { label: 'Diesel', value: 2 },
    { label: 'Continuous combustion', value: 3 },
    { label: 'Reciprocating', value: 4 },
    { label: 'Rotary', value: 5 },
    { label: '4-Cylinder', value: 6 },
    { label: 'Single Cylinder', value: 7 }
  ];

  vendors: any[] = [
    { label: 'Vendors 1', value: 1 },
    { label: 'Vendors 2', value: 2 },
    { label: 'Vendors 3', value: 3 },
    { label: 'Vendors 4', value: 4 },
    { label: 'Vendors 5', value: 5 },
    { label: 'Vendors 6', value: 6 },
    { label: 'Vendors 7', value: 7 }
  ];

  categories: any[] = [
    { label: 'Category 1', value: 1, childrens: [
      { label: 'Sub Category 1 Level 1', value: 2, childrens: null, },
      { label: 'Sub Category 2 Level 1', value: 3, childrens: [
        { label: 'Sub Category 1 Level 2', value: 4, childrens: null, },
        { label: 'Sub Category 1 Level 2', value: 5, childrens: null, },
      ] },
      { label: 'Sub Category 3 Level 1', value: 6, childrens: null },
    ], },
    { label: 'Category 2', value: 7, childrens: [
      { label: 'Sub Category 4 Level 1', value: 8, childrens: [
        { label: 'Sub Category 5 Level 2', value: 9, childrens: [
          { label: 'Sub Category 6 Level 3', value: 10, childrens: [
            { label: 'Sub Category 7 Level 4', value: 11, childrens: null, },
          ], },
        ], },
      ], },
    ] },
    { label: 'Category 3', value: 12, childrens: null },
    { label: 'Category 4', value: 13, childrens: [
      { label: 'Sub Category 9 Level 1', value: 14, childrens: [
        { label: 'Sub Category 10 Level 2', value: 15, childrens: null },
      ] },
    ] },
    { label: 'Category 5', value: 16, childrens: null },
    { label: 'Category 3', value: 17, childrens: null },
  ];

  ngOnInit() {
    this.form = this.fb.group({
      images: ['', []],
      RFIDNumber: ['', []],
      assetName: ['', []],
      assetSerialNumber: ['', []],
      assetType: ['', []],
      assetCategory: ['', []],
      assetVendor: ['', []],
      productionDate: ['', []],
      purchaseDate: ['', []],
      expirationDate: ['', []],
      purchaseCost: ['', []],
      warranty: ['', []],
      warrantyExpiration: ['', []],
      warrantyDocument: ['', []],
      description: ['', []],
      createdBy: ['', []],
    });
  };

  togglehasSocialNumber = () => {
    this.hasSocialNumber = !this.hasSocialNumber;
  };

  toggleWarranty = () => {
    this.warranty = !this.warranty;
  };

  handleSelectType = (event: any) => {
    this.form.patchValue({
      assetType: event.value
    });
    this.selectedTypeName = event.label;
  };

  handleSelectVendor = (event: any) => {
    this.form.patchValue({
      assetVendor: event.value
    });
    this.selectedVendorName = event.label;
  };

  handleProductionDate = (event: any) => {
    this.form.patchValue({
      productionDate: event
    });
  };

  handlePurchaseDate = (event: any) => {
    this.form.patchValue({
      purchaseDate: event
    });
  };
  
  handleExpirationDate = (event: any) => {
    this.form.patchValue({
      expirationDate: event
    });
  };

  handleWarrantyDate = (event: any) => {
    this.form.patchValue({
      warrantyExpiration: event
    });
  };

  handleCategory = (event: any) => {
    this.form.patchValue({
      assetCategory: event?.value
    });
    this.selectedCategory = event;
  };

  handleWarrentyFile(event: any): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.warrentyFile = files[0];
      this.form.patchValue({
        warrantyDocument: files[0]
      });
    }
  };

  triggeWarrentyFile(): void {
    if (this.warrentFileInput) {
      this.warrentFileInput.nativeElement.click();
    }
  };

}
