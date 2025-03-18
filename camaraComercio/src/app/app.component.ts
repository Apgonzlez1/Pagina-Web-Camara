import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component'; // <-- Importa el footer

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    NetworkingEventosComponent, 
    ServiciosComponent, 
    BolsaEmpleoComponent,
    FooterComponent // <-- Agrega el footer aquí
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camaraComercio';
}
