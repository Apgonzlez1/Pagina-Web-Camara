import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
imports: [MatIconModule] // Elimina NgFor si no se usa aquí

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [MatIconModule, NgFor],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  redes = [
    { nombre: 'Facebook', icono: 'fa-brands fa-facebook', url: 'https://www.facebook.com' },
    { nombre: 'Instagram', icono: 'fa-brands fa-instagram', url: 'https://www.instagram.com' },
    { nombre: 'TikTok', icono: 'fa-brands fa-tiktok', url: 'https://www.tiktok.com' },
    { nombre: 'YouTube', icono: 'fa-brands fa-youtube', url: 'https://www.youtube.com' }
  ];

  whatsappUrl = 'https://wa.me/1234567890'; // Cambia con el número de WhatsApp de la Cámara
}
