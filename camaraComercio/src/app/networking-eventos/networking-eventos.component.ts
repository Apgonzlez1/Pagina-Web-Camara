import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; 
import { TranslocoModule } from '@jsverse/transloco';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-networking-eventos',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule,FormsModule], // ✅ Asegúrate de importar RouterModule
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
  searchText: string = '';
  eventos = [
    { nombre: 'Conferencia:Contrato de Inversión, Acuerdos Comerciales y Tratados de Libre Comercio - Capítulo Ecuador 2025', lugar: 'Instituto Tsáchila, Santo Domingo', fecha: 'Jueves 3 de abril del 2025', imagen: 'assets/evento1.jpg' },
    { nombre: 'Prom Perú', lugar: 'Hotel Golden Vista', fecha: '10 de abril de 2025', imagen: 'assets/evento2.jpg' },
    { nombre: 'Tsáchila Economic Fórum IV Edition #TEF2025', lugar: '-', fecha: 'Jueves 19 de junio de 2025', imagen: 'assets/Forum1.png' },
    { nombre: 'Tsáchila Business Convention #TBC2025', lugar: '-', fecha: 'Jueves 23 de octubre 2025', imagen: 'assets/congresos.jpg' }
  ];

  get filteredEventos() {
    return this.eventos.filter(evento =>
      evento.nombre.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }
}
