import { CommonModule } from '@angular/common';
import { Component, ElementRef, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { CustomButtonComponent } from '@Shared/components/custom-button/custom-button.component';

@Component({
  selector: 'app-attachments',
  standalone: true,
  imports: [CustomButtonComponent, CommonModule],
  templateUrl: './attachments.component.html',
  styleUrl: './attachments.component.scss'
})

export class AttachmentsComponent {
  @ViewChild('fileInput') fileInput: ElementRef<HTMLInputElement> | undefined;
  @ViewChildren('changeFileInput') changeFileInputs: QueryList<ElementRef<HTMLInputElement>> | undefined;
  uploadedFiles: File[] = [];

  sliceString = (text: string): string => {
    return text?.length > 50 ? `${text?.slice(0, 50)}...` : text;
  };

  addAttachments = (): void => {
    if (this.fileInput) {
      this.fileInput.nativeElement.click();
    }
  };

  handleFileInput = (event: any) => {
    const files: FileList = event.target.files;
    if (files) {
      for (let i = 0; i < files.length; i++) {
        this.uploadedFiles.push(files[i]);
      }
    }
  };

  triggerChangeFile(index: number): void {
    const fileInputElement = this.changeFileInputs?.toArray()[index].nativeElement;
    if (fileInputElement) {
      fileInputElement.click();
    }
  };

  handleChangeFile(event: any, index: number): void {
    const files: FileList = event.target.files;
    if (files && files.length > 0) {
      this.uploadedFiles[index] = files[0];
    }
  };

  removeFile(index: number): void {
    this.uploadedFiles.splice(index, 1);
  };

}
