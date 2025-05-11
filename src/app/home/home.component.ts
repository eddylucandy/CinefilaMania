import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  newsItems = [
    { title: 'Novedades del Año', description: 'Exceptional efficient emerging, minimum viable content curated...', image: '/img/news.PNG' },
    { title: 'Item 2', description: 'Gimza conversation exquisite perfect, nostalgic intricate content...', image: '/img/2147775681-2.jpg' },
    { title: 'Item 3', description: 'International first-class nulle, qui...', image: '/img/news.PNG' }
  ];

  reviews = [
    { title: 'Subheading', description: 'Body text for whatever you’d like to add more to the subheading.', image: '/img/news.PNG' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to expand on the main point.', image: '/img/2147775681-2.jpg' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to share more.', image: '/img/2147775681-2.jpg' }
  ];

  currentNewsIndex = 0;

  constructor() { }

  ngOnInit(): void { }

  nextNews(): void {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.newsItems.length;
  }

  prevNews(): void {
    this.currentNewsIndex = (this.currentNewsIndex - 1 + this.newsItems.length) % this.newsItems.length;
  }
}
