import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Ahora 'Inicio' es la página principal
  { path: 'networking-y-eventos', component: NetworkingEventosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'bolsa-empleo', component: BolsaEmpleoComponent },
];
