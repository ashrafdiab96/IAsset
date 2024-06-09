import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckInOutSelectComponent } from './check-in-out-select.component';

describe('CheckInOutSelectComponent', () => {
  let component: CheckInOutSelectComponent;
  let fixture: ComponentFixture<CheckInOutSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CheckInOutSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CheckInOutSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
