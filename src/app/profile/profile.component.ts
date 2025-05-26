import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  user = {
    name: 'Nombre_Usuario',
    email: 'CorreoElectronico@Usuario'
  };
  movies = [
    { title: 'Movie 1', image: 'path/to/movie1.jpg' },
    { title: 'Movie 2', image: 'path/to/movie2.jpg' },
    { title: 'Movie 3', image: 'path/to/movie3.jpg' }
  ];
  series = [
    { title: 'Series 1', image: 'path/to/series1.jpg' },
    { title: 'Series 2', image: 'path/to/series2.jpg' },
    { title: 'Series 3', image: 'path/to/series3.jpg' }
  ];
}
