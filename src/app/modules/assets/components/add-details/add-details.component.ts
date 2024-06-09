import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { SubmitCoreForm } from '@Core/helpers/submitCore';
import { SwitchComponent } from '@Shared/components/switch/switch.component';
import { TabsComponent } from '@Shared/components/tabs/tabs.component';
import { DetailsComponent } from './details/details.component';
import { AttachmentsComponent } from './attachments/attachments.component';
import { AccessoriesComponent } from './accessories/accessories.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-details',
  standalone: true,
  imports: [
    SwitchComponent,
    CommonModule,
    TabsComponent,
    DetailsComponent,
    AttachmentsComponent,
    AccessoriesComponent
  ],
  templateUrl: './add-details.component.html',
  styleUrl: './add-details.component.scss'
})

export class AddDetailsComponent extends SubmitCoreForm {
  isAccessory: boolean = false;
  tabs: string[] = [];
  currentTab: string = '';

  constructor (private route: ActivatedRoute) {
    super();
  };

  ngOnInit() {
    this.tabs = ['Details', 'Attachments', 'Has Accessories'];
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.onTabChanged('Has Accessories');
        this.currentTab = 'Has Accessories';
      } else {
        this.currentTab = 'Details';
      }
    });
  };

  updateTabs() {
    if (this.isAccessory) {
      this.tabs = this.tabs.filter(tab => tab !== 'Has Accessories');
      // this.onTabChanged('Details');
      // this.currentTab = 'Details';
    } else {
      if (!this.tabs.includes('Has Accessories')) {
        this.tabs.push('Has Accessories');
      }
    }
  };

  toggleIsAccessory = () => {
    this.isAccessory = !this.isAccessory;
    this.updateTabs();
  };

  onTabChanged = (tab: string) => {
    this.currentTab = tab;
  };

}
