import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { IconComponent } from '@Shared/components/icon/icon.component';
import { TabsComponent } from '@Shared/components/tabs/tabs.component';
import { OverviewComponent } from './overview/overview.component';
import { MaintenanceComponent } from './maintenance/maintenance.component';
import { AttachmentComponent } from './attachment/attachment.component';
import { ActivityLogComponent } from './activity-log/activity-log.component';
import { CustomButtonComponent } from '@Shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-accessories-details',
  standalone: true,
  imports: [
    IconComponent,
    CommonModule,
    TabsComponent,
    OverviewComponent,
    MaintenanceComponent,
    AttachmentComponent,
    ActivityLogComponent,
    CustomButtonComponent
  ],
  templateUrl: './accessories-details.component.html',
  styleUrl: './accessories-details.component.scss'
})

export class AccessoriesDetailsComponent {
  data: any[] = [];
  finalData: any[] = [];
  currentItem: number = 0;
  selectedItem: any;
  tabs: string[] = [];
  currentTab: string = 'Overview';
  
  constructor (private router: Router) {};

  ngOnInit(): void {
    this.data = [
      { id: 1, quantity: 5, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Single Cylinder', type: 'Engines', category: 'Rotary', vendor: 'Rotrons', warehouse: 'Al Rayyan', acquisition: '05/15/2020',  expiration: '12/31/2024', status: 1, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 2, quantity: 0, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Dual Cylinder', type: 'Engines', category: 'Piston', vendor: 'Mechatron', warehouse: 'Al Khor', acquisition: '03/20/2019',  expiration: '11/30/2023', status: 2, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 3, quantity: 3, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Turbocharged', type: 'Engines', category: 'Turbine', vendor: 'Techtron', warehouse: 'Doha', acquisition: '09/10/2021',  expiration: '10/31/2025', status: 3, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 4, quantity: 0, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'V6', type: 'Engines', category: 'V-Engine', vendor: 'AutoMach', warehouse: 'Al Wakrah', acquisition: '07/05/2018',  expiration: '09/30/2022', status: 4, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 5, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Electric Motor', type: 'Engines', category: 'Electric', vendor: 'EcoTech', warehouse: 'Mesaieed', acquisition: '02/14/2022',  expiration: '08/31/2026', status: 4, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 6, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Diesel Engine', type: 'Engines', category: 'Diesel', vendor: 'DieselWorks', warehouse: 'Al Rayyan', acquisition: '11/30/2020',  expiration: '05/31/2024', status: 3, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 7, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Hybrid Engine', type: 'Engines', category: 'Hybrid', vendor: 'GreenPower', warehouse: 'Dukhan', acquisition: '04/18/2019',  expiration: '12/31/2023', status: 4, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 8, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Rotary Engine', type: 'Engines', category: 'Rotary', vendor: 'RotaryTech', warehouse: 'Lusail', acquisition: '06/25/2021',  expiration: '11/30/2025', status: 2, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 9, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Inline 4', type: 'Engines', category: 'Inline', vendor: 'EngineMaster', warehouse: 'Al Rayyan', acquisition: '08/09/2020',  expiration: '10/31/2024', status: 1, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 10, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'V8', type: 'Engines', category: 'V-Engine', vendor: 'AutoMach', warehouse: 'Al Khor', acquisition: '10/03/2017',  expiration: '07/31/2022', status: 2, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 11, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Electric Hybrid', type: 'Engines', category: 'Electric/Hybrid', vendor: 'EcoTech', warehouse: 'Doha', acquisition: '12/22/2021',  expiration: '09/30/2025', status: 3, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 12, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Single Turbo', type: 'Engines', category: 'Turbocharged', vendor: 'TurboWorks', warehouse: 'Mesaieed', acquisition: '03/08/2019',  expiration: '08/31/2023', status: 3, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 13, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Inline 6', type: 'Engines', category: 'Inline', vendor: 'EngineMaster', warehouse: 'Al Wakrah', acquisition: '07/11/2020',  expiration: '11/30/2024', status: 4, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 14, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Supercharged V6', type: 'Engines', category: 'Supercharged', vendor: 'SuperWorks', warehouse: 'Al Khor', acquisition: '09/29/2018',  expiration: '06/30/2023', status: 1, production: '12/31/2024', warranty: '12/31/2024', },
      { id: 15, quantity: 1, RFIDNo: 'A41-M1-4c-14567', serialNo: '5417e-762ek-149821542', name: 'Boxer Engine', type: 'Engines', category: 'Boxer', vendor: 'BoxerTech', warehouse: 'Al Rayyan', acquisition: '11/04/2021',  expiration: '12/31/2025', status: 2, production: '12/31/2024', warranty: '12/31/2024', },
    ];
    this.finalData = [...this.data];
    this.currentItem = 0;
    this.tabs = ['Overview', 'Maintenance', 'Attachment', 'Activity Log'];
    this.selectedItem = this.finalData[0];
  };
  
  backToCreate = () => {
    this.router.navigate(['/assets/create']);
  };

  handleSearch = (event: any) => {
    const keyword = (event.target as HTMLInputElement).value.toLocaleLowerCase();
    this.finalData = this.data.filter(obj => {
      return Object.values(obj).some(value => 
        String(value).toLocaleLowerCase().includes(keyword)
      );
    });
    if (this.finalData.length > 0) {
      this.changeItem(0);
    } else {
      this.selectedItem = null
    }
  };

  changeItem = (index: number) => {
    this.currentItem = index;
    this.selectedItem = this.finalData[index];
  };

  onTabChanged = (tab: string) => {
    this.currentTab = tab;
  };

  assignAccessories = () => {
    this.router.navigate(['assets/create'], { queryParams: { tab: 'Has Accessories' } });
  };

}
