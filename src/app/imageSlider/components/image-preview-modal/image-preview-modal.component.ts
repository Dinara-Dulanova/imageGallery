import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-image-preview-modal',
  standalone: true,
  imports: [],
  templateUrl: './image-preview-modal.component.html',
  styleUrl: './image-preview-modal.component.css'
})
export class ImagePreviewModalComponent {
  @Input() imageUrl!: string;
  @Output() close = new EventEmitter<void>();

  onClose(): void {
    this.close.emit();
  }

}
