import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // 


@Component({
  selector: 'app-noticias',
  imports: [CommonModule, RouterModule], //
  templateUrl: './noticias.component.html',
  styleUrl: './noticias.component.css'
})
export class NoticiasComponent {
  noticias = [
    {
      titulo: "Seminario de Impuestos y Análisis de la Ley de Alivio Financiero",
      descripcion: "📊 Compartimos estrategias clave para optimizar impuestos y disminuir la carga tributaria de forma legal de las empresas y empresarios 💼✅",
      imagen: "assets/n1.jpg",
      enlace: "/noticias-detalle/noticia1"  // Cambiamos a la nueva ruta
    },
    {
      titulo: "Taller Práctico de Crédito y Cobranza",
      descripcion: "La Cámara de Industrias y Producción de Santo Domingo expresa su profundo agradecimiento a todas las personas y a las más de 20 empresas que participaron en el Taller Práctico de Crédito y Cobranza, un evento que superó todas las expectativas. ✅📊",
      imagen: "assets/n24.jpg",
      enlace: "/noticias-detalle/noticia2"  // Cambiamos a la nueva ruta
    },
    {
      titulo: " Impulsando la producción y el comercio exterior",
      descripcion: "Se dialogó con todo el Gabinete Productivo y  sobre la importancia de Apoyar en las diferentes áreas, Productivo, Industrial, Vial, Seguridad, Turismo, Salud, Educación, Agroindustrial, Tributario, agilizar los procesos burocráticos, reafirmando el compromiso del Gobierno con el fortalecimiento del sector empresarial y el crecimiento económico sostenible de nuestra región. 📈✨",
      imagen: "assets/n34.jpg",
      enlace: "/noticias-detalle/noticia3"  // Cambiamos a la nueva ruta
    },
    {
      titulo: "Seminario de Impuestos y Análisis de la Ley de Alivio Financiero",
      descripcion: "📊 Compartimos estrategias clave para optimizar impuestos y disminuir la carga tributaria de forma legal de las empresas y empresarios 💼✅",
      imagen: "assets/n1.jpg",
      enlace: "/noticias-detalle/noticia1"  // Cambiamos a la nueva ruta
    },
    {
      titulo: "Taller Práctico de Crédito y Cobranza",
      descripcion: "La Cámara de Industrias y Producción de Santo Domingo expresa su profundo agradecimiento a todas las personas y a las más de 20 empresas que participaron en el Taller Práctico de Crédito y Cobranza, un evento que superó todas las expectativas. ✅📊",
      imagen: "assets/n24.jpg",
      enlace: "/noticias-detalle/noticia2"  // Cambiamos a la nueva ruta
    },
    {
      titulo: " Impulsando la producción y el comercio exterior",
      descripcion: "Se dialogó con todo el Gabinete Productivo y  sobre la importancia de Apoyar en las diferentes áreas, Productivo, Industrial, Vial, Seguridad, Turismo, Salud, Educación, Agroindustrial, Tributario, agilizar los procesos burocráticos, reafirmando el compromiso del Gobierno con el fortalecimiento del sector empresarial y el crecimiento económico sostenible de nuestra región. 📈✨",
      imagen: "assets/n34.jpg",
      enlace: "/noticias-detalle/noticia3"  // Cambiamos a la nueva ruta
    }, {
      titulo: "Taller Práctico de Crédito y Cobranza",
      descripcion: "La Cámara de Industrias y Producción de Santo Domingo expresa su profundo agradecimiento a todas las personas y a las más de 20 empresas que participaron en el Taller Práctico de Crédito y Cobranza, un evento que superó todas las expectativas. ✅📊",
      imagen: "assets/n24.jpg",
      enlace: "/noticias-detalle/noticia2"  // Cambiamos a la nueva ruta
    },
    {
      titulo: " Impulsando la producción y el comercio exterior",
      descripcion: "Se dialogó con todo el Gabinete Productivo y  sobre la importancia de Apoyar en las diferentes áreas, Productivo, Industrial, Vial, Seguridad, Turismo, Salud, Educación, Agroindustrial, Tributario, agilizar los procesos burocráticos, reafirmando el compromiso del Gobierno con el fortalecimiento del sector empresarial y el crecimiento económico sostenible de nuestra región. 📈✨",
      imagen: "assets/n34.jpg",
      enlace: "/noticias-detalle/noticia3"  // Cambiamos a la nueva ruta
    }
  ];

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
