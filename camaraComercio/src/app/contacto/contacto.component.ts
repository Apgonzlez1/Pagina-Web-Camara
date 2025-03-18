import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  contactForm = {
    name: '',
    email: '',
    message: ''
  };

  submitForm() {
    if (this.contactForm.name && this.contactForm.email && this.contactForm.message) {
      alert('¡Mensaje enviado correctamente!');
      this.contactForm = { name: '', email: '', message: '' }; // Reinicia el formulario
    } else {
      alert('Por favor, completa todos los campos.');
    }
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
