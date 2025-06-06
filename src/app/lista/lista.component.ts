import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

// Definimos una interfaz para asegurar el tipado de los objetos de películas
interface Movie {
  title: string;
  Valuation: string;
  description: string;
  image: string;
}

// Definimos una interfaz para el objeto de configuración de la lista
interface ListConfig {
  tipoLista: string;
  imgList: string;
}

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule], // CommonModule es necesario para *ngFor
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.css'
})
export class ListaComponent implements OnInit {
  // Propiedad para la URL de la imagen de fondo
  backgroundImageUrl: string = '';
  // Propiedad para la lista de las top películas (excluyendo el primer elemento de configuración)
  topMovies: Movie[] = [];

  // La lista original con el elemento de configuración y las películas
  private rawListData = [
    { tipoLista: 'Lista Elegida', imgList: 'https://dnm.nflximg.net/api/v6/2DuQlx0fM4wd1nzqm5BFBi6ILa8/AAAAQRC29H19twWKcTZ9Zpg4biJbGNaHF2GGIYNcLt4eZ6fvwugUJbuKxTjjMFPCS-y5P3ZePL57rupDtSkyUIJhv3P8leMJGMzszuG2CHNd65NwWPu5LeKxQkRNfNMHmxAwt7tmQZFk1VIrBd1aXr2AR5DM.jpg?r=5b1' },
    { title: 'El Padrino', Valuation: 'excelente', description: 'Un clásico del cine que narra la historia de la familia Corleone.', image: 'https://wallpapers.com/images/featured/movie-9pvmdtvz4cb0xl37.jpg' },
    { title: 'Cadena Perpetua', Valuation: 'increíble', description: 'La historia de Andy Dufresne en la prisión de Shawshank.', image: 'https://preview.redd.it/xe2175thl6u81.jpg?auto=webp&s=5842f2df12adb095e635f43e809d2f38093e7a13' },
    { title: 'Pulp Fiction', Valuation: 'culto', description: 'Varias historias entrelazadas en el bajo mundo de Los Ángeles.', image: 'https://cloudfront-us-east-1.images.arcpublishing.com/infobae/2NJO3FE7QBHQJD5GKNCI6XIODM.jpg' }
  ];

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Asignamos la URL de la imagen de fondo del primer elemento
    if (this.rawListData.length > 0 && 'imgList' in this.rawListData[0]) {
      this.backgroundImageUrl = (this.rawListData[0] as ListConfig).imgList;
    }

    // Filtramos las películas, excluyendo el primer elemento que es de configuración
    this.topMovies = this.rawListData.slice(1) as Movie[];
  }

  // Ahora goToReview puede recibir el título de la película o un ID si lo tuvieras
 // goToReview(movieTitle: string): void {
   // console.log(`Navegando a la reseña de: ${movieTitle}`);
    // Podrías pasar el título o un ID como parámetro a la ruta de review
  //  this.router.navigate(['/review', movieTitle]);
  //}

  goToReview() {
    this.router.navigate(['/review']);
  }

}
