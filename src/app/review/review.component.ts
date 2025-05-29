import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
/*
interface Movie {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  backgroundImage: string;
  trailerDuration: string;
  rating: number;
  maxRating: number;
  genre: string;
  year: number;
}
*/
@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})



export class ReviewComponent {

  reviewItems = [
    { title: 'Minecraft', description: 'Exceptional efficient emerging, minimum viable content curated...', image:'https://hips.hearstapps.com/hmg-prod/images/minecraft-pelicula-critica-67ef8f226988c.jpg?crop=1xw:1xh;center,top&resize=1200:*', rating: 4, trailerTime:'00:30', comment: 'Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut.'  }
  ]


  stars: number[] = [1, 2, 3, 4, 5]; // For rendering stars

  constructor() { }

  ngOnInit(): void {
  }
/*
  movieTitle: string = 'Captain America brave new world';
  movieDescription: string = 'Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut.';
  trailerTime: string = '00:30';
  rating: number = 4; // Assuming 4 out of 5 stars
  reviewText: string = 'Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut. Excepteur efficient emerging, minim veniam anim aute carefully curated Ginza conversation exquisite perfect nostrud nisi intricate Content. Qui international first-class nulla ut.';
*/

}
