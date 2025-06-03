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
    img: 'https://images.icon-icons.com/2643/PNG/512/man_boy_people_avatar_user_person_black_skin_tone_icon_159355.png',
    name: 'Nombre_Usuario',
    email: 'CorreoElectronico@Usuario'
  };

  movies = [
    {
      title: 'Movie 1',
      image: 'https://www.lavanguardia.com/peliculas-series/images/movie/poster/2024/3/w1280/6tJWxRfBKWGIPFkfLTod2CgCexU.jpg'
    },
    { title: 'Movie 2',
      image: 'https://www.fiestadelcine.com/wp-content/uploads/2024/10/minecraft.jpg'
    },
    {
      title: 'Movie 3',
      image: 'https://lumiere-a.akamaihd.net/v1/images/08c3f7af558231c022dcccf9eae2cd7c_2867x4096_41eff7c2.png'
    },
    {
      title: 'Movie 4',
      image: 'https://www.fiestadelcine.com/wp-content/uploads/2024/10/minecraft.jpg'
    }
  ];

  series = [
    {title: 'Series 1', image: 'path/to/series1.jpg'},
    {title: 'Series 2', image: 'path/to/series2.jpg'},
    {title: 'Series 3', image: 'path/to/series3.jpg'}
  ];

  startIndex = 0;

  get visibleMovies() {
    return this.movies.slice(this.startIndex, this.startIndex + 3);
  }

  prevMovie() {
    if (this.startIndex > 0) {
      this.startIndex--;
    }
  }

  nextMovie() {
    if (this.startIndex + 3 < this.movies.length) {
      this.startIndex++;
    }
  }
}
