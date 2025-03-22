import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router'; // 
@Component({
  selector: 'app-noticias',
  imports: [CommonModule, RouterModule], //
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: "Nuevas Regulaciones para la Industria",
      descripcion: "El gobierno anuncia nuevas normativas que afectarán la producción y exportación.",
      imagen: "assets/noticias.jpg",
      enlace: "/noticias-detalle/noticia1"  // Cambiamos a la nueva ruta
    },
    {
      titulo: "Caso de Éxito: Empresa Local Crece un 200%",
      descripcion: "Una empresa de manufactura en Santo Domingo ha logrado expandirse con éxito.",
      imagen: "assets/noticias.jpg",
      enlace: "/noticias-detalle/noticia2"  // Cambiamos a la nueva ruta
    },
    {
      titulo: "Innovación en el Sector Industrial",
      descripcion: "Descubre cómo las nuevas tecnologías están cambiando la producción en la región.",
      imagen: "assets/noticias.jpg",
      enlace: "/noticias-detalle/noticia3"  // Cambiamos a la nueva ruta
    }
  ];

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
