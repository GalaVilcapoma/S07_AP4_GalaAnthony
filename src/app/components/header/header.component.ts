import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: false,
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  nav = [
    { label: 'Inicio', href: '#hero' },
    { label: 'Juegos', href: '#games' },
    { label: 'Beneficios', href: '#benefits' },
    { label: 'Contacto', href: '#contact' },
  ];

  onNavClick(href: string) {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
