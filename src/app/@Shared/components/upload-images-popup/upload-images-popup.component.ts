import { Component, ElementRef, EventEmitter, Input, Output, SimpleChanges, ViewChild } from '@angular/core';
import { IconComponent } from '../icon/icon.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-upload-images-popup',
  standalone: true,
  imports: [IconComponent, CommonModule],
  templateUrl: './upload-images-popup.component.html',
  styleUrl: './upload-images-popup.component.scss'
})

export class UploadImagesPopupComponent {
  @Input() open: boolean = false;
  @Input() togglePopup!: () => void;
  @Input() imagesNumber: number = 1;
  @Input() imageIndex: number = 0;

  @Output() imageSelected: EventEmitter<(File | null)[]> = new EventEmitter<(File | null)[]>();

  images: (File | null)[] = [null];
  selectedImage: number = 0;

  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;

  private currentIndex: number = 0;
  
  ngOnInit() {
    this.images = Array(this.imagesNumber).fill(null);
  };

  // ngOnChanges(changes: SimpleChanges): void {
  //   if ('imageIndex' in changes) {
  //     this.selectedImage = this.imageIndex;
  //     if (this.images[this.selectedImage]) {
  //       this.selectImg();
  //     }
  //   }
  // }

  selectImg = (index: number) => {
    this.selectedImage = index;
  };

  // selectImg = (index: number) => {
  //   this.selectedImage = index;
  //   this.imageSelected.emit(this.images);
  //   if (this.images[index]) {
  //     const fileReader = new FileReader();
  //     fileReader.onload = (event: any) => {
  //       const imageUrl = event.target.result;
  //       const imgElement = document.querySelector('.shown-img') as HTMLImageElement;
  //       if (imgElement) {
  //         imgElement.src = imageUrl.toString();
  //       }
  //     };
  //     fileReader.readAsDataURL(this.images[index] as File);
  //   } else {
  //     const fileInput = document.createElement('input');
  //     fileInput.type = 'file';
  //     fileInput.accept = 'image/*';
  //     fileInput.style.display = 'none';
  //     fileInput.addEventListener('change', (event) => {
  //       const fileList = (event.target as HTMLInputElement).files;
  //       if (fileList && fileList.length > 0) {
  //         this.images[index] = fileList[0];
  //         this.selectImg(index);
  //       }
  //     });
  //     document.body.appendChild(fileInput);
  //     fileInput.click();
  //   }
  // };

  getImageUrl(image: File | null): string {
     return image ? URL.createObjectURL(image) : '';
  };

  // deleteImage(): void {
  //   if (this.selectedImage !== null) {
  //     this.images[this.selectedImage] = null;
  //     const imgElement = document.querySelector('.shown-img') as HTMLImageElement;
  //     if (imgElement) {
  //       imgElement.src = 'assets/img/mc2-img.png';
  //     }
  //   }
  // };

  deleteImage(): void {
    if (this.selectedImage >= 0 && this.selectedImage < this.images.length) {
      this.images.splice(this.selectedImage, 1);
      this.images.push(null);
      const imgElement = document.querySelector('.shown-img') as HTMLImageElement;
      if (imgElement) {
        imgElement.src = 'assets/img/mc2-img.png';
      }
      this.imageSelected.emit(this.images);
      const firstNull = this.images.findIndex(image => image === null);
      this.selectedImage = this.images.length > 0 ? firstNull : -1;
    }
  };

  uploadImage(): void {
    if (this.selectedImage !== null && this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  };

  // handleFileInput(event: Event): void {
  //   const fileList = (event.target as HTMLInputElement).files;
  //   if (fileList && fileList.length > 0) {
  //     for (let i = 0; i < fileList.length; i++) {
  //       const file = fileList[i];
  //       if (file.type.startsWith('image/')) {
  //         const reader = new FileReader();
  //         reader.onload = (e: any) => {
  //           this.images[this.selectedImage] = file;
  //           this.updateNextAvailableSlot();
  //           this.imageSelected.emit(this.images);
  //         };
  //         reader.readAsDataURL(file);
  //       }
  //     }
  //   }
  // };

  handleFileInput(event: Event): void {
    const fileList = (event.target as HTMLInputElement).files;
    if (fileList && fileList.length > 0) {
      const currentImageCount = this.images.filter(image => image !== null).length;
      const availableSlots = this.imagesNumber - currentImageCount;

      if (availableSlots <= 0) {
        return;
      }

      for (let i = 0; i < Math.min(fileList.length, availableSlots); i++) {
        const file = fileList[i];
        if (file.type.startsWith('image/')) {
          const reader = new FileReader();
          reader.onload = (e: any) => {
            this.images[this.selectedImage] = file;
            this.updateNextAvailableSlot();
            this.imageSelected.emit(this.images);
          };
          reader.readAsDataURL(file);
        }
      }
    }
  };
  
  updateNextAvailableSlot() {
    const nextAvailableSlot = this.images.findIndex(image => image === null);
    this.selectedImage = nextAvailableSlot !== -1 ? nextAvailableSlot : this.images.length;
  };

}
