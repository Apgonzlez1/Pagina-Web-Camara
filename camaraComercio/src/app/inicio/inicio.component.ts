import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown(new Date("2025-06-19T00:00:00").getTime());
    }
  }

  startCountdown(targetDate: number): void {
    const countdownElement = document.getElementById("countdown");

    if (!countdownElement) {
      console.error("Elemento con ID 'countdown' no encontrado.");
      return;
    }

    const interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = targetDate - now;

      if (distance < 0) {
        countdownElement.innerHTML = "¡El evento ha comenzado!";
        clearInterval(interval);
        return;
      }

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      countdownElement.innerHTML = `${days}D | ${hours}H | ${minutes}M | ${seconds}S`;
    }, 1000);
  }


  // Método a ejecutar al hacer clic en el botón de inscripción
  inscribirse(): void {
    // Aquí puedes redirigir a la página de inscripción o ejecutar la lógica necesaria
    console.log('Redirigiendo a la inscripción del evento...');
    // Por ejemplo, usando el router:
    // this.router.navigate(['/inscripcion-evento']);
  }
  backgroundImage: string = 'assets/inicio.jpg'; // Imagen de fondo
  showScrollButton = false; // Controla la visibilidad del botón flotante

  // Método para cambiar el fondo dinámicamente
  changeBackground(imageUrl: string) {
    this.backgroundImage = imageUrl;
  }

  // Detecta el desplazamiento del usuario y muestra u oculta el botón de volver arriba
  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.scrollY > 300; // Aparece cuando el usuario baja 300px
  }

  // Método para regresar al inicio
  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  // Datos de la sección "Quiénes Somos"

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
