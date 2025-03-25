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
  mostrarEquipo = false;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.startCountdown('countdown-tef', new Date("2025-06-19T00:00:00").getTime());
      this.startCountdown('countdown-tbc', new Date("2025-10-23T00:00:00").getTime()); // Fecha para TBC2025
    }
  }

  startCountdown(elementId: string, targetDate: number): void {
    const countdownElement = document.getElementById(elementId);

    if (!countdownElement) {
      console.error(`Elemento con ID '${elementId}' no encontrado.`);
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
    mision: "Propiciar la productividad y desarrollo regional de la Cámara de Industrias como institución que lidere a los gremios industriales y de producción, con representación proactiva del sistema ante el Estado, a través del fortalecimiento en investigación, emprendimiento, desarrollo, formalización, competitividad e innovación empresarial buscando siempre la generación de empleo y el bienestar social.",
    vision: "Posicionar a nuestra institución como un ente influyente, eficiente y organizado a nivel regional, convirtiéndose en un referente dentro del desarrollo nacional a mediano plazo, siendo promotora de la competitividad de los empresarios, gremios y el Estado..",
    valores: ["Innovación", "Sostenibilidad", "Competitividad", "Ética"],
    equipoDirectivo: [

      {
        nombre: "QUEZADA CABRERA MARCOS VINICIO",
        cargo: "Vicepresidente",
        foto: "assets/perfil2.jpg",
        funciones: ["Responsable de comercio exterior", "Fomentar la creación de nuevas industrias"],
        correo: "gerencia@hotelgoldenvista.com.ec"
      },
      {
        nombre: "ALDEAN JARAMILLO JUAN FRANCISCO",
        cargo: "Director Comercial",
        foto: "assets/perfil2.jpg",
        correo: "aldeanf@gmail.com"
      },
      {
        nombre: "VILLACIS BALAREZO JORGE ISRAEL",
        cargo: "Director Industrial",
        foto: "assets/perfil2.jpg",
        correo: "Jivb2020@hotmail.com"
      },
      
      {
        nombre: "CEVALLOS ASTUDILLO ÁNGEL FERNANDO",
        cargo: "Socio Colaborador",
        foto: "assets/perfil2.jpg",
        correo: "angel_cevallos832002@hotmail.com"
      },
      {
        nombre: "ARAÚZ ZAMBRANO MARÍA JOSÉ",
        cargo: "Coordinadora Ejecutiva",
        foto: "assets/perfil2.jpg",
        correo: "coordinacionejecutiva@industriassdt.org"
      }
    ]
    
  };

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
