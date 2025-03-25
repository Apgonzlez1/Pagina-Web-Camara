import { Component } from '@angular/core';

@Component({
  selector: 'app-noticiasfacebook',
  imports: [],
  templateUrl: './noticiasfacebook.component.html',
  styleUrl: './noticiasfacebook.component.css'
})
export class NoticiasfacebookComponent {
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }

}
