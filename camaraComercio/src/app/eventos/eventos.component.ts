import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; // 🔹 IMPORTANTE: Agregar RouterModule

@Component({
  selector: 'app-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule], // 🔹 Agrega RouterModule aquí
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent { 
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
