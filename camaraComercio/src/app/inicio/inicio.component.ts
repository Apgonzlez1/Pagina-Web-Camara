import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  backgroundImage: string = 'assets/inicio.jpg'; // Cambia esto dinámicamente si es necesario
  

  // Método para cambiar el fondo dinámicamente
  changeBackground(imageUrl: string) {
    this.backgroundImage = imageUrl;
  }
  quienesSomos = {
    historia: "La Cámara de Industriales y Producción de Santo Domingo se fundó con el objetivo de organizar a los diferentes entes productivos de la región. Desde su creación, ha promovido la unión de los socios y ha representado activamente sus intereses, fomentando el desarrollo y progreso industrial en la región.",
    mision: "Propiciar la productividad y desarrollo regional de la Cámara de Industrias como institución líder de los gremios industriales y de producción, con representación proactiva ante el Estado. Buscamos fortalecer la investigación, el emprendimiento, la competitividad e innovación empresarial para generar empleo y bienestar social.",
    vision: "Posicionar a nuestra institución como un ente influyente, eficiente y organizado a nivel regional, convirtiéndose en un referente dentro del desarrollo nacional a mediano plazo, promoviendo la competitividad empresarial y la cooperación con el Estado.",
    valores: ["Innovación", "Sostenibilidad", "Competitividad", "Ética"],
    equipoDirectivo: [
      { 
        cargo: "Presidente Ejecutivo", 
        foto: "assets/perfil2.jpg", 
        funciones: ["Gestionar inversiones", "Cumplimiento normativo", "Impulsar la modernización industrial"] 
      },
      { 
        cargo: "Vicepresidente Ejecutivo", 
        foto: "assets/perfil2.jpg", 
        funciones: ["Responsable de comercio exterior", "Fomentar la creación de nuevas industrias"] 
      },
      { 
        cargo: "Secretario", 
        foto: "assets/perfil2.jpg", 
        funciones: ["Funciones secretariales", "Atención al público"] 
      },
      { 
        cargo: "Tesorero", 
        foto: "assets/perfil2.jpg", 
        funciones: ["Gestión de presupuestos"] 
      }
    ]
  };

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
