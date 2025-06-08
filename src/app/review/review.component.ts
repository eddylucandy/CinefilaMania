import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {HeaderComponent} from '../header/header.component';
import {FooterComponent} from '../footer/footer.component';

interface Comment {
  id: number;
  username: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
}

@Component({
  selector: 'app-review',
  standalone: true,
  imports: [CommonModule, FormsModule, HeaderComponent, FooterComponent],
  templateUrl: './review.component.html',
  styleUrl: './review.component.css'
})
export class ReviewComponent implements OnInit {

  reviewItems = [
    {
      title: 'Minecraft',
      description: 'Un misterioso portal atrae a cuatro inadaptados al supramundo, un extraño mundo mágico cúbico que se nutre de la imaginación. Para regresar a casa, deberán dominar el terreno mientras se embarcan en una búsqueda mágica con un artesano inesperado llamado Steve.',
      image: 'https://hips.hearstapps.com/hmg-prod/images/minecraft-pelicula-critica-67ef8f226988c.jpg?crop=1xw:1xh;center,top&resize=1200:*',
      rating: 4,
      trailerTime: '00:30',
      trailerUrl: 'https://youtu.be/NOAmJa-dhCA?si=IPbKYzikywwcI2si'
    }
  ];

  comments: Comment[] = [
    {
      id: 1,
      username: 'María García',
      avatar: 'https://ui-avatars.com/api/?name=Maria+Garcia&background=FF6B6B&color=fff',
      rating: 5,
      text: '¡Increíble película! Me encantó la adaptación del videojuego. Los efectos visuales son espectaculares y la historia logra capturar la esencia del juego original. Perfecta para fans y nuevos espectadores.',
      date: 'Hace 2 días'
    },
    {
      id: 2,
      username: 'Carlos Rodríguez',
      avatar: 'https://ui-avatars.com/api/?name=Carlos+Rodriguez&background=4ECDC4&color=fff',
      rating: 4,
      text: 'Muy buena película familiar. Mi hijo quedó fascinado con el mundo de Minecraft en la pantalla grande. Aunque algunos momentos son un poco lentos, en general es muy entretenida.',
      date: 'Hace 3 días'
    },
    {
      id: 3,
      username: 'Ana Martínez',
      avatar: 'https://ui-avatars.com/api/?name=Ana+Martinez&background=95E1D3&color=fff',
      rating: 3,
      text: 'Esperaba un poco más de la trama. Los visuales son impresionantes, pero la historia es algo predecible. Aun así, es disfrutable para los fans del juego.',
      date: 'Hace 5 días'
    },
    {
      id: 4,
      username: 'Luis Fernández',
      avatar: 'https://ui-avatars.com/api/?name=Luis+Fernandez&background=F38181&color=fff',
      rating: 5,
      text: '¡Obra maestra! La nostalgia de ver Minecraft cobrar vida es indescriptible. La música, los efectos, todo está perfectamente ejecutado. La mejor adaptación de videojuego que he visto.',
      date: 'Hace 1 semana'
    },
    {
      id: 5,
      username: 'Isabel Torres',
      avatar: 'https://ui-avatars.com/api/?name=Isabel+Torres&background=AA96DA&color=fff',
      rating: 4,
      text: 'Sorprendentemente buena. No soy fan del juego, pero la película me atrapó desde el principio. Gran trabajo en la construcción del mundo y los personajes son carismáticos.',
      date: 'Hace 1 semana'
    },
    {
      id: 6,
      username: 'Roberto Sánchez',
      avatar: 'https://ui-avatars.com/api/?name=Roberto+Sanchez&background=FCBAD3&color=fff',
      rating: 2,
      text: 'Me decepcionó un poco. Como jugador veterano de Minecraft, sentí que faltaba profundidad en la historia. Los efectos son buenos, pero no es suficiente para salvar la película.',
      date: 'Hace 2 semanas'
    },
    {
      id: 7,
      username: 'Carmen López',
      avatar: 'https://ui-avatars.com/api/?name=Carmen+Lopez&background=FFFFD2&color=333',
      rating: 4,
      text: 'Excelente película para ver en familia. Mis hijos la disfrutaron muchísimo y yo también me divertí. La recomiendo totalmente para una tarde de cine en casa.',
      date: 'Hace 2 semanas'
    },
    {
      id: 8,
      username: 'Diego Morales',
      avatar: 'https://ui-avatars.com/api/?name=Diego+Morales&background=A8E6CF&color=fff',
      rating: 5,
      text: '¡Simplemente épica! La atención al detalle es impresionante. Cada referencia al juego está perfectamente integrada. No puedo esperar a verla de nuevo.',
      date: 'Hace 3 semanas'
    }
  ];

  stars: number[] = [1, 2, 3, 4, 5];
  hoverRating: number = 0;

  newComment = {
    text: '',
    rating: 0
  };

  constructor() { }

  ngOnInit(): void {
  }

  setRating(rating: number): void {
    this.newComment.rating = rating;
  }

  openTrailer(): void {
    window.open(this.reviewItems[0].trailerUrl, '_blank');
  }

  addComment(): void {
    if (this.newComment.text.trim() && this.newComment.rating > 0) {
      const comment: Comment = {
        id: this.comments.length + 1,
        username: 'Usuario Actual', // En producción, esto vendría del sistema de autenticación
        avatar: 'https://ui-avatars.com/api/?name=Usuario+Actual&background=6C5CE7&color=fff',
        rating: this.newComment.rating,
        text: this.newComment.text.trim(),
        date: 'Ahora mismo'
      };

      // Agregar el comentario al principio del array
      this.comments.unshift(comment);

      // Limpiar el formulario
      this.newComment = {
        text: '',
        rating: 0
      };

      // Resetear hover
      this.hoverRating = 0;
    }
  }
}
