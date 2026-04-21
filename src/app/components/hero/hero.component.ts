import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-hero',
  standalone: false,
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  @Output() cta = new EventEmitter<void>();

  onCta() {
    this.cta.emit();
    const el = document.querySelector('#games');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }
}
