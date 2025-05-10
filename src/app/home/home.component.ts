import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  standalone: true,
  styleUrl: './home.component.css'
})
export class HomeComponent implements OnInit {
  newsItems = [
    { title: 'Item 1', description: 'Exceptional efficient emerging, minimum viable content curated...', image: '/img/news.PNG' },
    { title: 'Item 2', description: 'Gimza conversation exquisite perfect, nostalgic intricate content...', image: '/img/2147775681-2.jpg' },
    { title: 'Item 3', description: 'International first-class nulle, qui...', image: '/img/news.PNG' }
  ];

  reviews = [
    { title: 'Subheading', description: 'Body text for whatever you’d like to add more to the subheading.', image: '/img/news.PNG' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to expand on the main point.', image: '/img/2147775681-2.jpg' },
    { title: 'Subheading', description: 'Body text for whatever you’d like to share more.', image: '/img/2147775681-2.jpg' }
  ];

  constructor() { }

  ngOnInit(): void { }
}
