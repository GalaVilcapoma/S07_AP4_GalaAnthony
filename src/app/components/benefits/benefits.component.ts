import { Component } from '@angular/core';

@Component({
  selector: 'app-benefits',
  standalone: false,
  templateUrl: './benefits.component.html',
  styleUrls: ['./benefits.component.css']
})
export class BenefitsComponent {
  items = [
    'Ofertas diarias en títulos populares',
    'Comunidad y reseñas de jugadores',
    'Soporte multiplataforma',
  ];
}
