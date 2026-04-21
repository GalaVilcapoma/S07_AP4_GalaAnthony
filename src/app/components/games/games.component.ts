import { Component } from '@angular/core';

interface Game { id: number; title: string; price: string; genre: string; img?: string }

@Component({
  selector: 'app-games',
  standalone: false,
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent {
  games: Game[] = [
    { id: 1, title: 'Cyber Racers', price: '$19.99', genre: 'Racing', img: '' },
    { id: 2, title: 'Dungeon Quest', price: '$29.99', genre: 'RPG', img: '' },
    { id: 3, title: 'Sky Fighters', price: '$14.99', genre: 'Action', img: '' },
    { id: 4, title: 'Puzzle Master', price: 'Gratis', genre: 'Puzzle', img: '' }
  ];

  selected?: Game;

  viewDetails(g: Game) {
    this.selected = g;
    alert(`Seleccionaste: ${g.title} — ${g.price}`);
  }
}
