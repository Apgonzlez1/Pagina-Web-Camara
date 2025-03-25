import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faHandshake, faBullhorn, faChalkboardTeacher, faBriefcase, faMicrochip, faUsers, faGlobe, faCertificate } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [MatCardModule, SlickCarouselModule, FontAwesomeModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  icons = {
    handshake: faHandshake,
    bullhorn: faBullhorn,
    chalkboardTeacher: faChalkboardTeacher,
    briefcase: faBriefcase,
    microchip: faMicrochip,
    users: faUsers,
    globe: faGlobe,
    certificate: faCertificate
  };

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
}
