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


  // Método a ejecutar al hacer clic en el botón de inscripción
  inscribirse(): void {
    // Aquí puedes redirigir a la página de inscripción o ejecutar la lógica necesaria
    console.log('Redirigiendo a la inscripción del evento...');
    // Por ejemplo, usando el router:
    // this.router.navigate(['/inscripcion-evento']);
    
  }  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
