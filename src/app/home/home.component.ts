import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'] // ojo: es style**Urls**, en plural
})
export class HomeComponent {
  novedades = [
    { title: 'Novedades del año', description: 'Excepteur efficient emerging...', image: 'assets/banner.jpg' }
  ];

  reviews = [
    { image: 'assets/review1.jpg', subtitle: 'Subheading', text: 'Body text for whatever you’d like to add more.' },
    { image: 'assets/review2.jpg', subtitle: 'Subheading', text: 'Body text to expand on the main point.' },
    { image: 'assets/review3.jpg', subtitle: 'Subheading', text: 'Body text to share more.' },
  ];

  topPeliculas = {
    image: 'assets/peliculas.jpg',
    entries: [
      { subtitle: 'Subheading', text: 'Body text to expand on the main point.' },
      { subtitle: 'Subheading', text: 'Add main takeaway points, quotes, anecdotes.' },
      { subtitle: 'Subheading', text: 'Provides details, explanations, and context.' }
    ]
  };

  topSeries = {
    image: 'assets/series.jpg',
    entries: [
      { subtitle: 'Subheading', text: 'Body text to expand on the main point.' },
      { subtitle: 'Subheading', text: 'Add main takeaway points, quotes, anecdotes.' },
      { subtitle: 'Subheading', text: 'Provides details, explanations, and context.' }
    ]
  };
}
