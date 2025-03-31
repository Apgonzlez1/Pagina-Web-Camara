import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { RouterModule } from '@angular/router';
import { isPlatformBrowser } from '@angular/common';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, CommonModule, TranslocoModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  mostrarEquipo = false;
  // Variables para TEF2025
  tefMonths: string = '00';
  tefDays: string = '00';
  tefHours: string = '00';

  // Variables para TBC2025
  tbcMonths: string = '00';
  tbcDays: string = '00';
  tbcHours: string = '00';

  showInfo = false;
  showVicepresidenteInfo: boolean = false;
  titulos: string[] = [];
  titulos1: string[] = [];

  constructor(@Inject(PLATFORM_ID) private platformId: Object, private translocoService: TranslocoService) { }

  ngOnInit(): void {

    if (isPlatformBrowser(this.platformId)) {
      // TEF2025
      this.startCountdown(
        new Date("2025-06-19T00:00:00").getTime(),
        (months, days, hours) => {
          this.tefMonths = months.toString().padStart(2, '0');
          this.tefDays = days.toString().padStart(2, '0');
          this.tefHours = hours.toString().padStart(2, '0');
        }
      );

      // TBC2025
      this.startCountdown(
        new Date("2025-10-23T00:00:00").getTime(),
        (months, days, hours) => {
          this.tbcMonths = months.toString().padStart(2, '0');
          this.tbcDays = days.toString().padStart(2, '0');
          this.tbcHours = hours.toString().padStart(2, '0');
        }
      );
    }
  }

  // Recibe la fecha objetivo y una función callback para asignar los valores
  startCountdown(targetDate: number, callback: (m: number, d: number, h: number) => void): void {
    const interval = setInterval(() => {
      const now = Date.now();
      let distance = targetDate - now;

      if (distance < 0) {
        // Si el evento ya empezó, paramos el contador
        callback(0, 0, 0);
        clearInterval(interval);
        return;
      }

      // Cálculo de meses, días y horas
      const months = Math.floor(distance / (1000 * 60 * 60 * 24 * 30));
      distance -= months * (1000 * 60 * 60 * 24 * 30);

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      distance -= days * (1000 * 60 * 60 * 24);

      const hours = Math.floor(distance / (1000 * 60 * 60));

      // Actualiza las variables del contador
      callback(months, days, hours);
    }, 1000);
  }

  openForm(url: string): void {
    window.open(url, '_blank');
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
        nombre: "Edgar Nogales Jami",
        cargo: "Fundador",
        correo: "edgnog@hotmail.com",
        imagen: "assets/Edgar_Nogales.jpg"
      },
      {
        nombre: "Francisco Aldean Jaramillo",
        cargo: "Director Comercial",
        correo: "aldeanf@gmail.com",
        imagen: "assets/Francisco.jpg"
      },
      {
        nombre: "Jorge Villacis Balarezo",
        cargo: "Director Industrial",
        correo: "Jivb2020@hotmail.com",
        imagen: "assets/Jorge.jpeg"
      },

      {
        nombre: "Roy Cisneros Megía",
        cargo: "Director Financiero",
        correo: "royccc@hotmail.com",
        imagen: "assets/Roy.jpeg"
      },
      {
        nombre: "Sandra Tenorio Quilo",
        cargo: "Directora Jurídica",
        correo: "legalservicio2014@hotmail.com",
        imagen: "assets/Sandra.png "
      },
      {
        nombre: "María José Aráuz Zambrano",
        cargo: "Coordinadora Ejecutiva",
        correo: "coordinacionejecutiva@industriassdt.org",
        imagen: "assets/Majo.jpg "
      }
    ]

  };

  toggleInfo() {
    this.showInfo = !this.showInfo;
    if (this.showInfo) {
      this.titulos = this.translocoService.translate('quienesSomos.features.presidenta.titulos');
    }
  }

  toggleVicepresidenteInfo(): void {
    this.showVicepresidenteInfo = !this.showVicepresidenteInfo; // Cambia el estado de showVicepresidenteInfo
    if (this.showVicepresidenteInfo) {
      // Aquí estamos cargando los títulos para el vicepresidente
      this.titulos1 = this.translocoService.translate('quienesSomos.features.vicepresidente.titulos1');
    }
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
  showFundadorInfo: boolean = false;
    // Métodos para alternar entre mostrar y ocultar la información adicional
    toggleFundadorInfo(): void {
      this.showFundadorInfo = !this.showFundadorInfo; // Cambia el estado de showFundadorInfo
    }
    getDigits(value: string): string[] {
      return value.split('');
    }
    
   
}
