import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListDefaultActionsComponent } from './list-default-actions.component';

describe('ListDefaultActionsComponent', () => {
  let component: ListDefaultActionsComponent;
  let fixture: ComponentFixture<ListDefaultActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListDefaultActionsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListDefaultActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
