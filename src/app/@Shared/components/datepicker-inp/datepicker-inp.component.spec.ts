import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatepickerInpComponent } from './datepicker-inp.component';

describe('DatepickerInpComponent', () => {
  let component: DatepickerInpComponent;
  let fixture: ComponentFixture<DatepickerInpComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DatepickerInpComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(DatepickerInpComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
