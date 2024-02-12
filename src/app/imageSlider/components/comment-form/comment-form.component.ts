import { Component, OnInit, Input } from '@angular/core';
import { ImageService } from '../../../images.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; 
import { CommentInterface } from '../../types/slide.interface';

@Component({
  selector: 'app-comment-form',
  templateUrl: './comment-form.component.html',
  styleUrl: './comment-form.component.css'
})
export class CommentsComponent implements OnInit {
  @Input() imageUrl!: string;

  comments: CommentInterface[] = [];
  newComment: any = { author: '', text: '', date: '' };

  constructor(private imageService: ImageService) {
   }

  ngOnInit(): void {
    this.getComments();
  }


  getComments(): void {
    console.log(this.imageUrl);
    this.imageService.getSlides().subscribe(slides => {
      const currentSlide = slides.find(slide => slide.url === this.imageUrl); // Находим текущее изображение по url
      console.log(currentSlide?.comments?.length);
      if (currentSlide?.comments?.length !== 0) {
        this.comments = currentSlide?.comments || []
      }
      else {
        this.comments = []
      }
    });
  }

  // Функция для добавления нового комментария
  addComment(): void {
    this.newComment.date = new Date().toISOString().split('T')[0]; // Получаем текущую дату
    this.comments.push(this.newComment); // Добавляем новый комментарий в список комментариев
    this.imageService.updateComments(this.comments).subscribe(() => {
      this.newComment = { author: '', text: '', date: '' }; // Очищаем форму
    });
  } 
}
