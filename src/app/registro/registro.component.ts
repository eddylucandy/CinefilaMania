import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import {Router} from '@angular/router';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registro',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {
  // Modelo de datos para el formulario
  userId: string = '';
  email: string = '';
  password: string = '';
  confirmPassword: string = '';
  acceptedTerms: boolean = false;

  constructor(private router: Router) {}

  // Navega a la página de login
  goToLogin(): void {
    this.router.navigate(['/login']);
  }

  // Maneja el envío del formulario
  onRegister(): void {
    if (!this.userId || !this.email || !this.password || !this.confirmPassword) {
      alert('Por favor, rellene todos los campos.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Las contraseñas no coinciden.');
      return;
    }

    if (!this.acceptedTerms) {
      alert('Debe aceptar los términos y condiciones.');
      return;
    }
/*
    // Petición a Firebase/o backend
    console.log('Registro exitoso:', {
      userId: this.userId,
      email: this.email,
    })*/;

    alert('Registro exitoso!');
    this.router.navigate(['/home']);
  }
}
