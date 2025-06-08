import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
//import { HomeComponent } from './home/home.component';
//import { LoginComponent } from './login/login.component';
//import { RegistroComponent } from './registro/registro.component';
//import { HeaderComponent } from './header/header.component';
//import { FooterComponent } from './footer/footer.component';



@Component({
  selector: 'app-root',
  standalone: true, // Define que es un Standalone Component
  imports: [RouterOutlet], //, HeaderComponent, FooterComponent, HomeComponent, LoginComponent, RegistroComponent, HeaderComponent, FooterComponent] //
  templateUrl: './app.component.html', // Usa templateUrl para mantener la estructura del HTML
  styleUrls: ['./app.component.css'] // Fíjate que es "styleUrls" con "s" al final
})
export class AppComponent {
  title = 'CinefilaMania';
}

