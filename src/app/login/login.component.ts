import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(private router: Router) {}

  login(email: string, password: string) {
    if (email === 'usuario@example.com' && password === '12345') {
      this.router.navigate(['/home']); // Redirige al usuario
    } else {
      alert('Credenciales incorrectas');
    }
  }

  goToRegister() {
    this.router.navigate(['/registro']);
  }

}
