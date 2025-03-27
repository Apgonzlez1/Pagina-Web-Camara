import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; // ✅ Importa RouterModule
import { TranslocoModule } from '@jsverse/transloco';
import { TranslocoService } from '@jsverse/transloco'; // Importa TranslocoService

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, RouterModule,TranslocoModule], // ✅ Asegúrate de importar RouterModule
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  selectedLanguage = '🌍 Auto'; // Idioma por defecto
  
  languages = {
    ES: 'Español',
    EN: 'English'
  };

  constructor(private transloco: TranslocoService) {}

  // Cambia el idioma según el botón seleccionado
  changeLang(language: string) {
    if (language === this.languages.ES) {
      this.transloco.setActiveLang('es'); // Cambiar idioma a español
    } else if (language === this.languages.EN) {
      this.transloco.setActiveLang('en'); // Cambiar idioma a inglés
    }
    
    this.selectedLanguage = language; // Actualiza el idioma mostrado en el botón
    console.log('Idioma cambiado a:', language);
  }
}
