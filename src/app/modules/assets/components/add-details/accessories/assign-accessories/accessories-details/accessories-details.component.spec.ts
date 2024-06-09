import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AccessoriesDetailsComponent } from './accessories-details.component';

describe('AccessoriesDetailsComponent', () => {
  let component: AccessoriesDetailsComponent;
  let fixture: ComponentFixture<AccessoriesDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AccessoriesDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AccessoriesDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
