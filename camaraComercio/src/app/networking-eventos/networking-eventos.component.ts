import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 

@Component({
  selector: 'app-networking-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule], // ✅ Asegúrate de importar RouterModule

  templateUrl: './networking-eventos.component.html',
  styleUrls: ['./networking-eventos.component.css']
})
export class NetworkingEventosComponent {
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
