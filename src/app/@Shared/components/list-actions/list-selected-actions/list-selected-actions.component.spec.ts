import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListSelectedActionsComponent } from './list-selected-actions.component';

describe('ListSelectedActionsComponent', () => {
  let component: ListSelectedActionsComponent;
  let fixture: ComponentFixture<ListSelectedActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListSelectedActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListSelectedActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
