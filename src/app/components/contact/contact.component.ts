import { Component } from '@angular/core';

@Component({
  selector: 'app-contact',
  standalone: false,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  name = '';
  email = '';
  message = '';
  submitted = false;

  onSubmit() {
    this.submitted = true;
    console.log('Contacto:', { name: this.name, email: this.email, message: this.message });
    // Aquí se podría integrar un servicio real o enviar a backend
    setTimeout(() => {
      alert('Gracias por contactarnos — nos pondremos en contacto pronto.');
      this.name = this.email = this.message = '';
      this.submitted = false;
    }, 300);
  }
}
