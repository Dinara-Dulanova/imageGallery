export interface SlideInterface {
  url: string;
  title: string;
  author: string;
  date: string;
  comments?: CommentInterface[]; // Опциональный массив комментариев
}

export interface CommentInterface {
  author: string;
  text: string;
  date: string;
}