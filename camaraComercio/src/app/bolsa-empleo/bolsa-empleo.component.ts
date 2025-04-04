import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslocoModule } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms'; // ✅ Importar FormsModule


@Component({
  selector: 'app-bolsa-empleo',
  standalone: true,
  imports: [CommonModule, TranslocoModule, FormsModule],
  templateUrl: './bolsa-empleo.component.html',
  styleUrls: ['./bolsa-empleo.component.css']
})
export class BolsaEmpleoComponent {
  backgroundImage = 'assets/fondo.jpg';

  searchText: string = '';
  isFullTime: boolean = false;
  isPartTime: boolean = false;
  isInternship: boolean = false;

  vacantes = [
    { titulo: 'Recepcionista Nocturno', ubicacion: 'Hotel Golden Vista', tipo: 'Medio Tiempo', imagen: 'assets/golden_Vista.png', contacto: 'reservas@hotelgoldenvista.com.ec', requisitos: 'Masculino' },
    { titulo: 'Vendedor Senior', ubicacion: 'Imporcent', tipo: 'Tiempo Completo', imagen: 'assets/logos/logo44.jpg', contacto: 'seleccion@imporcent.com', requisitos: 'Experiencia mínima de 5 años en el sector Cartera de clientes comprobable. Dominio de tecnología y comunicación efectiva. Trabajo en equipo, iniciativa y responsabilidad. Disponibilidad para viajar' }

  ];

  get filteredVacantes() {
    return this.vacantes.filter(vacante => {
      const matchesSearchText = this.searchText ? vacante.titulo.toLowerCase().includes(this.searchText.toLowerCase()) : true;
      const matchesFullTime = this.isFullTime ? vacante.tipo === 'Tiempo Completo' : true;
      const matchesPartTime = this.isPartTime ? vacante.tipo === 'Medio Tiempo' : true;
      const matchesInternship = this.isInternship ? vacante.tipo === 'Prácticas' : true;

      return matchesSearchText && matchesFullTime && matchesPartTime && matchesInternship;
    });
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
