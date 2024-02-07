import { Component, OnInit } from '@angular/core';
import { ImageService } from './images.service';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  slides: SlideInterface[] = [];

  constructor(private imageService: ImageService) {}

  ngOnInit() {
    this.imageService.getSlides().subscribe(slides => {
      this.slides = slides;
    });
  }
}