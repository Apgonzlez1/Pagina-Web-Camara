import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faMapMarkerAlt, faPhoneAlt, faEnvelope, } from '@fortawesome/free-solid-svg-icons'; // Iconos de FontAwesome

@Component({
  selector: 'app-contacto',
  standalone: true,
  imports: [CommonModule, FormsModule, FontAwesomeModule], // Incluye FontAwesomeModule
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent {
  // Definir los iconos aquí
  icons = {
    mapMarker: faMapMarkerAlt,
    phone: faPhoneAlt,
    envelope: faEnvelope,
  };

  submitForm(event: Event) {
    event.preventDefault(); // Evita que la página se recargue

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convertir FormData a JSON
    const jsonData: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      jsonData[key] = value.toString();
    });

    fetch("https://formspree.io/f/mblgyejv", {
      method: "POST",
      body: JSON.stringify(jsonData),
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
      .then(response => {
        if (response.ok) {
          alert("¡Mensaje enviado correctamente!");
          form.reset(); // Limpia el formulario después del envío
        } else {
          alert("Hubo un problema al enviar el mensaje.");
        }
      })
      .catch(() => {
        alert("Error de conexión, intenta nuevamente.");
      });
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
