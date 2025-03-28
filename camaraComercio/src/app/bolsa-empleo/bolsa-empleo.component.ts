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
    { titulo: 'Recepcionsita', ubicacion: 'Golden Vista', tipo: 'Tiempo completo'},
    { titulo: 'Desarrollador Backend', ubicacion: 'Ciudad', tipo: 'Medio Tiempo' },
    { titulo: 'Prácticas de Marketing', ubicacion: 'Remoto', tipo: 'Prácticas' },
    { titulo: 'Diseñador UX/UI', ubicacion: 'Remoto', tipo: 'Tiempo completo'},
  ];

  get filteredVacantes() {
    return this.vacantes.filter(vacante => {
      const matchesSearchText = this.searchText ? vacante.titulo.toLowerCase().includes(this.searchText.toLowerCase()) : true;
      const matchesFullTime = this.isFullTime ? vacante.tipo === 'Tiempo completo' : true;
      const matchesPartTime = this.isPartTime ? vacante.tipo === 'Medio Tiempo' : true;
      const matchesInternship = this.isInternship ? vacante.tipo === 'Prácticas' : true;

      return matchesSearchText && matchesFullTime && matchesPartTime && matchesInternship;
    });
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
