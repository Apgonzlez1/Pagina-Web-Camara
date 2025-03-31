import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { AfiliacionComponent } from './afiliacion/afiliacion.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { TefComponent } from './tef/tef.component';  // 🔹 Importar TEF
import { TbcComponent } from './tbc/tbc.component';  // 🔹 Importar TBC
import { NoticiasfacebookComponent } from './noticiasfacebook/noticiasfacebook.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'noticiasfacebook', component: NoticiasfacebookComponent },
  { path: 'networking-y-eventos', component: NetworkingEventosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'bolsa-empleo', component: BolsaEmpleoComponent },
  { path: 'afiliacion', component: AfiliacionComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'tef', component: TefComponent },  // 🔹 Agregar ruta para TEF
  { path: 'tbc', component: TbcComponent }   // 🔹 Agregar ruta para TBC
];
