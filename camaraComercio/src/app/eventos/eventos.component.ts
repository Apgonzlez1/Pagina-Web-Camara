import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 🔹 IMPORTANTE: Agregar RouterModule
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule,FormsModule], // 🔹 Agrega RouterModule aquí
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent { 
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }

  searchText: string = '';
  eventos = [
    { nombre: 'Tsáchila Economic Fórum IV Edition #TEF2025', lugar: 'Machala', fecha: '1 de Marzo 2025', imagen: 'assets/evento1.jpg' },
    { nombre: 'Visita', lugar: 'Quito', fecha: '6 de Marzo 2025', imagen: 'assets/evento2.jpg' },
    { nombre: 'Foro Empresarial', lugar: 'Centro de Convenciones', fecha: '20 de Marzo 2025', imagen: 'assets/eventos.jpg' },
    { nombre: 'Conferencia Innovación', lugar: 'Auditorio Nacional', fecha: '10 de Abril 2025', imagen: 'assets/congresos.jpg' }
  ];

  get filteredEventos() {
    return this.eventos.filter(evento =>
      evento.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
  

}
