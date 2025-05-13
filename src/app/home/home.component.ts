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
    { title: 'Novedades del Año', description: 'Exceptional efficient emerging, minimum viable content curated...', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'Item 2', description: 'Gimza conversation exquisite perfect, nostalgic intricate content...', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Item 3', description: 'International first-class nulle, qui...', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
  ];

  reviews = [
    { title: 'Subheading', description: 'Body text for whatever you’d like to add more to the subheading.', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to expand on the main point.', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to share more.', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
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
