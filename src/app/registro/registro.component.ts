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
      alert('Please fill in all fields.');
      return;
    }

    if (this.password !== this.confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (!this.acceptedTerms) {
      alert('You must agree to the terms and conditions.');
      return;
    }

    // Aquí podrías hacer una petición a Firebase o a tu backend
    console.log('Registration successful:', {
      userId: this.userId,
      email: this.email,
    });

    alert('Registration successful!');
    this.router.navigate(['/home']);
  }
}
