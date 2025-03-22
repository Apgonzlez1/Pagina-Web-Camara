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

  // Estado del formulario
  showForm = false;

  // Método para abrir el formulario
  openForm() {
    this.showForm = true;
  }

  // Método para cerrar el formulario
  closeForm() {
    this.showForm = false;
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
