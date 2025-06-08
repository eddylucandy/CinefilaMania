import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, HeaderComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  newsItems = [
    { title: 'Novedades del Año', description: '¡Descubre las películas y series más esperadas para 2025!', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'Favorito Marvel', description: 'Será X-Man, el mejor grupo de Super Heroes Marvel?...', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Mejores Pelicuals', description: 'Mire nuestra lista de top mejores peliculas de todos los tiempos.', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
  ];

  reviews = [
    { title: 'Stranger Things', Valuation: 'buena', description: 'Una obra maestra de la ciencia ficción y el terror nostálgico que cautiva desde el primer episodio. La serie combina perfectamente elementos de los años 80 con una narrativa moderna y envolvente.', image: 'https://hips.hearstapps.com/hmg-prod/images/5wducarmueomnh1wkca65pputxv-66ab60c945d48.jpg?crop=1xw:1xh;center,top&resize=980:*' },
    { title: 'X-Man', Valuation: 'mala', description: 'Trama confusa y mal desarrollada. Los efectos especiales son mediocres y las actuaciones poco convincentes. La película desperdicia el potencial del material original y decepciona a los fans.', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Invisible', Valuation: 'mediana', description: 'Una premisa interesante pero desaprovechada. Aunque los efectos visuales son destacables y hay momentos intrigantes, el ritmo irregular y el desarrollo de personajes superficial impiden que alcance su potencial.', image: 'https://adictosalatecnologia.es/wp-content/uploads/2025/01/Serie-invisible-ver-con-hijos.jpg' }
  ];

  topPeliculas = [
    { title: 'El Padrino', Valuation: 'buena', description: 'Body text for whatever you’d like to add more to the subheading.', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'Cadena Perpetua', Valuation: 'mala', description: 'Body text for whatever you’d like to expand on the main point.', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Minecraft', Valuation: 'mediana', description: 'Body text for whatever you’d like to share more.', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
    ];

  topSeries = [
    { title: 'Stranger Things', Valuation: 'buena', description: 'Body text for whatever you’d like to add more to the subheading.', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'The last of us', Valuation: 'mala', description: 'Body text for whatever you’d like to expand on the main point.', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Arcane', Valuation: 'mediana', description: 'Body text for whatever you’d like to share more.', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
  ];

  currentNewsIndex = 0;

  constructor(private router: Router) {}

  ngOnInit(): void { }

  nextNews(): void {
    this.currentNewsIndex = (this.currentNewsIndex + 1) % this.newsItems.length;
  }

  prevNews(): void {
    this.currentNewsIndex = (this.currentNewsIndex - 1 + this.newsItems.length) % this.newsItems.length;
  }

  goToReview() {
    this.router.navigate(['/review']);
  }

  goToLista(){
    this.router.navigate(['/lista']);
  }

}
