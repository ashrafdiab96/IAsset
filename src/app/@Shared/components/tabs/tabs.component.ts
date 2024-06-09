import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-tabs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tabs.component.html',
  styleUrl: './tabs.component.scss'
})
export class TabsComponent {
  @Input() options: string[] = [];
  @Input() selectedCurrentTab: string = '';

  @Output() tabChanged: EventEmitter<string> = new EventEmitter<string>();

  currentTab: string = '';

  constructor (private route: ActivatedRoute) { };

  ngOnInit() {
    this.route.queryParams.subscribe(params => {
      if (params['tab']) {
        this.currentTab = params['tab'];
      } else {
        this.currentTab = this.options?.[0];
      }
    });
    this.tabChanged.emit(this.currentTab);
  };

  setCurrentTab = (tab: string) => {
    this.currentTab = tab;
    this.tabChanged.emit(this.currentTab);
  };
}
