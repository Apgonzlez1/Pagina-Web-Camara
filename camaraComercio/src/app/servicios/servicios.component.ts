import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { SlickCarouselModule } from 'ngx-slick-carousel';

@Component({
  selector: 'app-servicios',
  standalone: true,
  imports: [ MatCardModule, SlickCarouselModule],
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
  servicios = [
    {
      titulo: 'Asesoría y Apoyo Empresarial',
      descripcion: 'Consultoría en normativas, financiamiento y automatización.',
      imagen: 'assets/img/asesoria.jpg'
    },
    {
      titulo: 'Comercio y Expansión Internacional',
      descripcion: 'Información sobre tratados, enlaces y ferias comerciales.',
      imagen: 'assets/img/comercio.jpg'
    },
    {
      titulo: 'Innovación y Tecnología',
      descripcion: 'Automatización, inteligencia artificial y sostenibilidad industrial.',
      imagen: 'assets/img/innovacion.jpg'
    }
  ];

  slideConfig = { 
    slidesToShow: 2, 
    slidesToScroll: 1, 
    autoplay: true, 
    autoplaySpeed: 3000, 
    dots: true, 
    arrows: false, 
    responsive: [
      { breakpoint: 768, settings: { slidesToShow: 1 } }
    ]
  };
}
