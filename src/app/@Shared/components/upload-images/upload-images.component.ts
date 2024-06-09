import { Component, Input } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';
import { UploadImagesPopupComponent } from '../upload-images-popup/upload-images-popup.component';

@Component({
  selector: 'app-upload-images',
  standalone: true,
  imports: [IconComponent, CommonModule, UploadImagesPopupComponent],
  templateUrl: './upload-images.component.html',
  styleUrl: './upload-images.component.scss'
})

export class UploadImagesComponent {
  @Input() imagesNumber: number = 1;

  openImagesPopup: boolean = false;
  selectedImage: number = 0;

  images: any[] = [1];
  
  ngOnInit() {
    this.images = Array(this.imagesNumber).fill(0);
  };

  toggleImagesPopup = () => {
    this.openImagesPopup = !this.openImagesPopup;
  };

  handleBtnUpload = () => {
    this.selectedImage = 0;
    this.toggleImagesPopup();
  };

  selectImage = (index: number) => {
    this.selectedImage = index;
    if (this.images[index]) {
      const fileReader = new FileReader();
      fileReader.onload = (event: any) => {
        const imageUrl = event.target.result;
        const imgElement = document.querySelector('.shown-img') as HTMLImageElement;
        if (imgElement) {
          imgElement.src = imageUrl.toString();
        }
      };
      fileReader.readAsDataURL(this.images[index] as File);
    } else {
      // this.toggleImagesPopup();
    }
  };

  handleImageSelected(images: (File | null)[]) {
    this.images = images;
  };

  getImageUrl(image: File | null): string {
    return image ? URL.createObjectURL(image) : '';
 };
}
