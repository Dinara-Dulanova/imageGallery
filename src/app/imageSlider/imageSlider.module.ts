import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ImageSliderComponent } from './components/imageSlider/imageSlider.component';
import { ImagePreviewModalModule } from './components/image-preview-modal/image-preview-modal.module';
import { CommentsModule } from './components/comment-form/comment-form.module';

@NgModule({
  imports: [
    CommonModule,
    ImagePreviewModalModule,
    CommentsModule
  ],
  exports: [ImageSliderComponent],
  declarations: [ImageSliderComponent],
})
export class ImageSliderModule {}
