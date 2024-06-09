import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetCategoryPopupComponent } from './create-asset-category-popup.component';

describe('CreateAssetCategoryPopupComponent', () => {
  let component: CreateAssetCategoryPopupComponent;
  let fixture: ComponentFixture<CreateAssetCategoryPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAssetCategoryPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssetCategoryPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
