import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { SlideInterface } from '../../types/slide.interface';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'image-slider',
  templateUrl: './imageSlider.component.html',
  styleUrls: ['./imageSlider.component.css'],
})
export class ImageSliderComponent implements OnInit, OnDestroy {
  constructor(private sanitizer: DomSanitizer) {}

  @Input() slides: SlideInterface[] = [];

  currentIndex: number = 0;
  timeoutId?: number;

  ngOnInit(): void {}

  ngOnDestroy() {}

  goToPrevious(): void {
    const isFirstSlide = this.currentIndex === 0;
    const newIndex = isFirstSlide
      ? this.slides.length - 1
      : this.currentIndex - 1;

    this.currentIndex = newIndex;
  }

  goToNext(): void {
    const isLastSlide = this.currentIndex === this.slides.length - 1;
    const newIndex = isLastSlide ? 0 : this.currentIndex + 1;

    this.currentIndex = newIndex;
  }

  goToSlide(slideIndex: number): void {
    this.currentIndex = slideIndex;
  }

  getCurrentSlideUrl() {
    if (this.slides.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.slides.length) {
      const imageUrl = this.slides[this.currentIndex].url;
      return this.sanitizer.bypassSecurityTrustUrl(imageUrl);
    } else {
      return null;
    }
  }
  
  
  getCurrentSlideTitle() {
    if (this.slides.length > 0 && this.currentIndex >= 0 && this.currentIndex < this.slides.length) {
      return this.slides[this.currentIndex].title;
    } else {
      return '';
    }
  }
  
}
