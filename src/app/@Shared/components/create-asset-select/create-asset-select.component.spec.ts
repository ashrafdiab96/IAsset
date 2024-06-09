import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetSelectComponent } from './create-asset-select.component';

describe('CreateAssetSelectComponent', () => {
  let component: CreateAssetSelectComponent;
  let fixture: ComponentFixture<CreateAssetSelectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAssetSelectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssetSelectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
