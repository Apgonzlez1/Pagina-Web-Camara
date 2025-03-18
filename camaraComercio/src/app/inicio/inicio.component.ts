import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-inicio',
  imports: [RouterModule, CommonModule],
  standalone: true,
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  backgroundImage: string = 'logo2.png'; // Cambia esto dinámicamente si es necesario
  

  // Método para cambiar el fondo dinámicamente
  changeBackground(imageUrl: string) {
    this.backgroundImage = imageUrl;
  }
}
