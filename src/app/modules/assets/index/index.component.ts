import { TableComponent } from '@Shared/components/table/index/index.component';
import { Component } from '@angular/core';
import { Router } from '@angular/router';

export interface PeriodicElement {
  id: number;
  name: string;
  type: string;
  category: string;
  vendor: string;
  warehouse: string;
  acquisition: string;
  expiration: string;
  status: number;
};

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [TableComponent],
  templateUrl: './index.component.html',
  styleUrl: './index.component.scss'
})

export class AssetsComponent {
  data: PeriodicElement[] = [];

  constructor(private router: Router) { }

  ngOnInit(): void {
      this.data = [
          { id: 1, name: 'Single Cylinder', type: 'Engines', category: 'Rotary', vendor: 'Rotrons', warehouse: 'Al Rayyan', acquisition: '05/15/2020',  expiration: '12/31/2024', status: 1 },
          { id: 2, name: 'Dual Cylinder', type: 'Engines', category: 'Piston', vendor: 'Mechatron', warehouse: 'Al Khor', acquisition: '03/20/2019',  expiration: '11/30/2023', status: 2 },
          { id: 3, name: 'Turbocharged', type: 'Engines', category: 'Turbine', vendor: 'Techtron', warehouse: 'Doha', acquisition: '09/10/2021',  expiration: '10/31/2025', status: 3 },
          { id: 4, name: 'V6', type: 'Engines', category: 'V-Engine', vendor: 'AutoMach', warehouse: 'Al Wakrah', acquisition: '07/05/2018',  expiration: '09/30/2022', status: 4 },
          { id: 5, name: 'Electric Motor', type: 'Engines', category: 'Electric', vendor: 'EcoTech', warehouse: 'Mesaieed', acquisition: '02/14/2022',  expiration: '08/31/2026', status: 4 },
          { id: 6, name: 'Diesel Engine', type: 'Engines', category: 'Diesel', vendor: 'DieselWorks', warehouse: 'Al Rayyan', acquisition: '11/30/2020',  expiration: '05/31/2024', status: 3 },
          { id: 7, name: 'Hybrid Engine', type: 'Engines', category: 'Hybrid', vendor: 'GreenPower', warehouse: 'Dukhan', acquisition: '04/18/2019',  expiration: '12/31/2023', status: 4 },
          { id: 8, name: 'Rotary Engine', type: 'Engines', category: 'Rotary', vendor: 'RotaryTech', warehouse: 'Lusail', acquisition: '06/25/2021',  expiration: '11/30/2025', status: 2 },
          { id: 9, name: 'Inline 4', type: 'Engines', category: 'Inline', vendor: 'EngineMaster', warehouse: 'Al Rayyan', acquisition: '08/09/2020',  expiration: '10/31/2024', status: 1 },
          { id: 10, name: 'V8', type: 'Engines', category: 'V-Engine', vendor: 'AutoMach', warehouse: 'Al Khor', acquisition: '10/03/2017',  expiration: '07/31/2022', status: 2 },
          { id: 11, name: 'Electric Hybrid', type: 'Engines', category: 'Electric/Hybrid', vendor: 'EcoTech', warehouse: 'Doha', acquisition: '12/22/2021',  expiration: '09/30/2025', status: 3 },
          { id: 12, name: 'Single Turbo', type: 'Engines', category: 'Turbocharged', vendor: 'TurboWorks', warehouse: 'Mesaieed', acquisition: '03/08/2019',  expiration: '08/31/2023', status: 3 },
          { id: 13, name: 'Inline 6', type: 'Engines', category: 'Inline', vendor: 'EngineMaster', warehouse: 'Al Wakrah', acquisition: '07/11/2020',  expiration: '11/30/2024', status: 4 },
          { id: 14, name: 'Supercharged V6', type: 'Engines', category: 'Supercharged', vendor: 'SuperWorks', warehouse: 'Al Khor', acquisition: '09/29/2018',  expiration: '06/30/2023', status: 1 },
          { id: 15, name: 'Boxer Engine', type: 'Engines', category: 'Boxer', vendor: 'BoxerTech', warehouse: 'Al Rayyan', acquisition: '11/04/2021',  expiration: '12/31/2025', status: 2 },
      ];
  };

  handleCreate = () => {
    this.router.navigate(['assets/create']);
  };
}
