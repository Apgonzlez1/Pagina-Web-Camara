import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { AfiliacionComponent } from './afiliacion/afiliacion.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { ContactoComponent } from './contacto/contacto.component';

export const routes: Routes = [
  { path: '', component: InicioComponent }, // Ahora 'Inicio' es la página principal
  { path: 'noticias', component: NoticiasComponent },
  { path: 'networking-y-eventos', component: NetworkingEventosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'bolsa-empleo', component: BolsaEmpleoComponent },
  { path: 'afiliacion', component: AfiliacionComponent },
  { path: 'directorio', component: DirectorioComponent },
  { path: 'contacto', component: ContactoComponent },

];
