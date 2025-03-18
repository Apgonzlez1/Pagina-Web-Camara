import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true, // IMPORTANTE: Angular standalone components
  imports: [RouterOutlet, NavbarComponent, NetworkingEventosComponent, ServiciosComponent, BolsaEmpleoComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'camaraComercio';
}
