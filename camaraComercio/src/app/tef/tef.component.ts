import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TranslocoModule } from '@jsverse/transloco';

@Component({
  selector: 'app-tef',
  standalone: true,
  imports: [CommonModule, RouterModule, TranslocoModule],
  templateUrl: './tef.component.html',
  styleUrls: ['./tef.component.css']
})
export class TefComponent {
  backgroundImage = 'assets/tef-banner.jpg'; // Cambia con la imagen adecuada

  eventDetails = {
    title: "Tsáchila Economic Forum IV Edition",
    date: "Jueves 19 de junio del 2025",
    location: "Hotel Zaracay, Santo Domingo de los Tsáchilas",
    startTime: "09:00 AM",
    description: `Un evento de alto nivel inspirado en el Foro de Davos que fortalece el sector productivo local, impulsa la competitividad, eficiencia y responsabilidad empresarial.`
  };

  agenda = [
    {
      title: "Foro Económico",
      details: "Impacto del Puerto de Chancay en Perú, aspectos políticos y comerciales del nuevo gobierno en EE.UU., y economías emergentes."
    },
    {
      title: "Casos de Éxito",
      details: "Presentación de dos empresas nacionales y productos de exportación no tradicionales de la región Tsáchila."
    },
    {
      title: "Networking Empresarial B2B & Festival Cultural",
      details: "Feria empresarial con parrilla libre y música en vivo para fomentar conexiones estratégicas."
    }
  ];
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
  descargarPDF() {
    const link = document.createElement('a');
    link.href = 'assets/documentos/TEF_IV.pdf'; // Ruta del PDF
    link.download = 'TEF_IV.pdf';
    link.click();
  }

}
