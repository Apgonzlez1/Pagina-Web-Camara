import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './inicio/footer/footer.component'; // <-- Importa el footer
import { AfiliacionComponent } from './afiliacion/afiliacion.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvaliableLanguages } from './transloco-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    NetworkingEventosComponent, 
    ServiciosComponent, 
    BolsaEmpleoComponent,
    AfiliacionComponent,
    DirectorioComponent,
    ContactoComponent,
    FooterComponent,
    TranslocoModule

  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public languages = AvaliableLanguages; // Expose the enum

  constructor(private transloco: TranslocoService) {}

  changeLang(lang: AvaliableLanguages) {
    this.transloco.setActiveLang(lang);
  }

  public getLanguage() {
    return 'languages.' + this.transloco.getActiveLang();
  }

  title = 'camaraComercio';
}

