import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-bolsa-empleo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './bolsa-empleo.component.html',
  styleUrls: ['./bolsa-empleo.component.css']
})
export class BolsaEmpleoComponent {
  backgroundImage = 'assets/fondo.jpg';
  showForm = false;
  successMessage = '';


  openForm() {
    this.showForm = true;
  }

  closeForm() {
    this.showForm = false;
    this.successMessage = ''; // Borra el mensaje al cerrar
  }
  enviarFormulario(event: Event) {
    event.preventDefault(); // Evita la redirección a Formspree

    const form = event.target as HTMLFormElement;
    const formData = new FormData(form);

    // Convertir FormData a un objeto JSON
    const jsonData: { [key: string]: string } = {};
    formData.forEach((value, key) => {
      jsonData[key] = value.toString();
    });

    fetch("https://formspree.io/f/mldjbjqg", {
      method: "POST",
      body: JSON.stringify(jsonData), // Enviar como JSON
      headers: { 
        "Content-Type": "application/json",
        "Accept": "application/json"
      }
    })
    .then(response => {
      if (response.ok) {
        alert("Formulario enviado correctamente");
        form.reset(); // Limpia el formulario
      } else {
        alert("Hubo un error al enviar el formulario");
      }
    })
    .catch(error => {
      alert("Error de conexión, intenta nuevamente.");
    });
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
