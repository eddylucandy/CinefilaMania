import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';

@Component({
  selector: 'app-root',
  standalone: true, // Define que es un Standalone Component
  imports: [RouterOutlet, HomeComponent], // Agrega HomeComponent correctamente
  templateUrl: './app.component.html', // Usa templateUrl para mantener la estructura del HTML
  styleUrls: ['./app.component.css'] // Fíjate que es "styleUrls" con "s" al final
})
export class AppComponent {
  title = 'CinefilaMania';
}

