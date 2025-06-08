import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router, RouterModule} from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CommonModule, RouterModule, HeaderComponent, FooterComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  constructor(private router: Router) {}


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
      image: 'https://all.web.img.acsta.net/r_2500_x/img/b3/fe/b3fe21d49a9a0e24d043742b55b50def.jpg'
    }
  ];

  series = [
    {
      title: 'Series 1',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqzATvdFkoSEXaVE08eusKWh1yo9HY8JnAbg&s'
    },
    {
      title: 'Series 2',
      image: 'https://universalextras.co.uk/files/2023/05/Silo-2023-TV-Series-Poster-Uni-versal-Extras.png'
    },
    {
      title: 'Series 3',
      image: 'https://images.justwatch.com/poster/302745653/s332/los-ultimos-de-nosotros'
    },
    {
      title: 'Series 4',
      image: 'https://ntvb.tmsimg.com/assets/p23622757_b_h8_ai.jpg?w=960&h=540'
    }
  ];

  startIndexMovie = 0;

  startIndexSerie = 0;

  //carousel movies
  get visibleMovies() {
    return this.movies.slice(this.startIndexMovie, this.startIndexMovie + 3);
  }

  prevMovie() {
    if (this.startIndexMovie > 0) {
      this.startIndexMovie--;
    }
  }

  nextMovie() {
    if (this.startIndexMovie + 3 < this.movies.length) {
      this.startIndexMovie++;
    }
  }

  //carousel Series
  get visibleSeries() {
    return this.series.slice(this.startIndexSerie, this.startIndexSerie + 3);
  }

  prevSerie() {
    if (this.startIndexSerie > 0) {
      this.startIndexSerie--;
    }
  }

  nextSerie() {
    if (this.startIndexSerie + 3 < this.series.length) {
      this.startIndexSerie++;
    }
  }

  goToLista(){
    this.router.navigate(['/lista']);
  }

  goToReview() {
    this.router.navigate(['/review']);
  }
}
