import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-tbc',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './tbc.component.html',
  styleUrls: ['./tbc.component.css']
})
export class TbcComponent {
  backgroundImage: string = 'assets/tbc-background.jpg'; // Asegúrate de agregar esta imagen en la carpeta assets

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
