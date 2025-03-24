import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NoticiasComponent } from './noticias/noticias.component';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';
import { AfiliacionComponent } from './afiliacion/afiliacion.component';
import { DirectorioComponent } from './directorio/directorio.component';
import { ContactoComponent } from './contacto/contacto.component';
import { EventosComponent } from './eventos/eventos.component';
import { TefComponent } from './tef/tef.component';  // 🔹 Importar TEF
import { TbcComponent } from './tbc/tbc.component';  // 🔹 Importar TBC
import { Noticia1Component } from './noticias-detalle/noticia1/noticia1.component';
import { Noticia2Component } from './noticias-detalle/noticia2/noticia2.component';
import { Noticia3Component } from './noticias-detalle/noticia3/noticia3.component';
import { NoticiasfacebookComponent } from './noticiasfacebook/noticiasfacebook.component';

export const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'noticiasfacebook', component: NoticiasfacebookComponent },
  { path: 'noticias', component: NoticiasComponent },
  { path: 'noticias-detalle/noticia1', component: Noticia1Component }, 
  { path: 'noticias-detalle/noticia2', component: Noticia2Component }, 
  { path: 'noticias-detalle/noticia3', component: Noticia3Component }, 
  { path: 'networking-y-eventos', component: NetworkingEventosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'bolsa-empleo', component: BolsaEmpleoComponent },
  { path: 'afiliacion', component: AfiliacionComponent },
  { path: 'directorio', component: DirectorioComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: 'eventos', component: EventosComponent },
  { path: 'tef', component: TefComponent },  // 🔹 Agregar ruta para TEF
  { path: 'tbc', component: TbcComponent }   // 🔹 Agregar ruta para TBC
];
