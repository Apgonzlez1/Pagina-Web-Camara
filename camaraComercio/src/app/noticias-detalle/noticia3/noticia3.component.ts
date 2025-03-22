import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia3',
  imports: [],
  templateUrl: './noticia3.component.html',
  styleUrl: './noticia3.component.css'
})
export class Noticia3Component {

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
