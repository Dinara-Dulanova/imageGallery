import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ImageSliderModule } from './imageSlider/imageSlider.module';
import { CommentsModule } from './imageSlider/components/comment-form/comment-form.module';
import { ImagePreviewModalModule } from './imageSlider/components/image-preview-modal/image-preview-modal.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ImageSliderModule,
    ImagePreviewModalModule,
    CommentsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
