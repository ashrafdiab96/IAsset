import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateAssetCategoryComponent } from './create-asset-category.component';

describe('CreateAssetCategoryComponent', () => {
  let component: CreateAssetCategoryComponent;
  let fixture: ComponentFixture<CreateAssetCategoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateAssetCategoryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CreateAssetCategoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
