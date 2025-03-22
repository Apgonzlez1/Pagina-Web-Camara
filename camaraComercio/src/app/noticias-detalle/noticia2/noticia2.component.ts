import { Component } from '@angular/core';

@Component({
  selector: 'app-noticia2',
  imports: [],
  templateUrl: './noticia2.component.html',
  styleUrl: './noticia2.component.css'
})
export class Noticia2Component {

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
