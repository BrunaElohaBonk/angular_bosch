import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div style="padding: 20px;">
      <h2>Bem-vindo, {{ user?.email }}</h2>
      <p>Aqui vai ficar o r/place 👀</p>
    </div>
  `,
})
export class HomeComponent implements OnInit {
  user: any;

  ngOnInit() {
    const data = localStorage.getItem('user');
    if (data) this.user = JSON.parse(data);
  }
}