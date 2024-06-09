import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadImagesPopupComponent } from './upload-images-popup.component';

describe('UploadImagesPopupComponent', () => {
  let component: UploadImagesPopupComponent;
  let fixture: ComponentFixture<UploadImagesPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UploadImagesPopupComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UploadImagesPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
