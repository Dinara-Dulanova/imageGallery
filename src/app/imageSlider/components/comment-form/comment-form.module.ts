import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsComponent } from './comment-form.component';
import { FormsModule } from '@angular/forms'; 

@NgModule({
  declarations: [
    CommentsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentsComponent
  ]
})
export class CommentsModule { }
