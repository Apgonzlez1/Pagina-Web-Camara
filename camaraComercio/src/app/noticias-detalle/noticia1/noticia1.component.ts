import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router'; //


@Component({
  selector: 'app-noticia1',
  imports: [CommonModule, RouterModule], //
  templateUrl: './noticia1.component.html',
  styleUrl: './noticia1.component.css'
})
export class Noticia1Component {
  
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }

}
