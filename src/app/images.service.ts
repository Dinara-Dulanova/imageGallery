import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SlideInterface } from './imageSlider/types/slide.interface';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private http: HttpClient) { }

  private jsonUrl = '/assets/images.json';

  getSlides(): Observable<SlideInterface[]> {
    return this.http.get<SlideInterface[]>('/assets/images.json');
  }

  // Функция для обновления комментариев в JSON файле
  updateComments(comments: any[]): Observable<any> {
    return this.http.put(this.jsonUrl, comments);
  }

  
}