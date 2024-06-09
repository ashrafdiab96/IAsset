import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterClearComponent } from './filter-clear.component';

describe('FilterClearComponent', () => {
  let component: FilterClearComponent;
  let fixture: ComponentFixture<FilterClearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FilterClearComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FilterClearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
