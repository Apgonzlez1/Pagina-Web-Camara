import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NetworkingEventosComponent } from './networking-eventos/networking-eventos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { BolsaEmpleoComponent } from './bolsa-empleo/bolsa-empleo.component';

const routes: Routes = [
  { path: 'networking-eventos', component: NetworkingEventosComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'bolsa-empleo', component: BolsaEmpleoComponent },
  { path: 'inicio', redirectTo: '/networking-eventos', pathMatch: 'full' },
  { path: '', redirectTo: '/inicio', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
