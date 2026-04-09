import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <div style="padding: 20px;">
      <h2>Login</h2>
      <input [(ngModel)]="email" placeholder="Email" />
      <br />
      <input [(ngModel)]="senha" type="password" placeholder="Senha" />
      <br />
      <button (click)="login()">Entrar</button>
    </div>
  `,
})
export class LoginComponent {
  email = '';
  senha = '';

  constructor(private router: Router) {}

  login() {
    if (!this.email || !this.senha) {
      alert('Preencha todos os campos');
      return;
    }

    localStorage.setItem('user', JSON.stringify({ email: this.email }));
    this.router.navigate(['/home']);
  }
}