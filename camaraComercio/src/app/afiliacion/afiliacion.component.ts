import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { TranslocoModule } from '@jsverse/transloco';


@Component({
  selector: 'app-afiliacion',
  standalone: true,
  imports: [CommonModule, FormsModule, TranslocoModule],
  templateUrl: './afiliacion.component.html',
  styleUrls: ['./afiliacion.component.css']
})
export class AfiliacionComponent {
  name: string = '';
  email: string = '';
  company: string = '';
  phone: string = '';
  document: File | null = null;
  searchQuery: string = '';
  showAllCompanies: boolean = false;

   companies = [
    { name: 'FGENTERPRISE S.A.', contact: 'fgenterprise@hotmail.com', logo: 'assets/logos/logo1.jpg', website: 'https://fgenterprise.ec/inicio', sector: 'Manufactura' },
    { name: 'FRUGALP S.A.', contact: 'recepcion.frugalp@gmail.com', logo: 'assets/logos/logo2.jpg', website: 'www.infor.com', sector: 'Logística' },
    { name: 'LACTEOS LA POLACA GUSTALAC S.A.', contact: 'contabilidad@avenapolaca.com.ec', logo: 'assets/logos/logo3.jpg', website: 'https://avenapolaca.com.ec/nosotros/', sector: 'Alimentos' },
    { name: 'BURNEO EXPORT', contact: 'burneoexport@hotmail.com', logo: 'assets/logos/logo4.jpg', website: 'http://burneoexport.com/', sector: 'Exportación' },
    { name: 'HOTEL GOLDEN VISTA', contact: 'reservas@hotelgoldenvista.com.ec', logo: 'assets/logos/logo5.png', website: 'https://hotelgoldenvista.com.ec/', sector: 'Turismo' },
    { name: 'INDUSTRIA DE CAUCHO Y ACERO VITERI INCAVIT S.A.', contact: 'impuestos@incavit.com', logo: 'assets/logos/logo6.jpeg', website: 'https://incavit.com/', sector: 'Industria' },
    { name: 'RHINOPLAST S.A.', contact: 'info@rhinoplast.com.ec', logo: 'assets/logos/logo7.png', website: 'https://rhinoplast.com.ec/', sector: 'Salud' },
    { name: '3 A.N.G. ADMINISTRACION DE NEGOCIOS GERENCIALES CIA. LTDA.', contact: 'royccc@hotmail.com', logo: 'assets/logos/logo8.jpeg', website: 'https://auditores3ang.com/empresa.html', sector: 'Consultoría' },
    { name: 'DISMAELEC', contact: 'gerencia_dismaelec@hotmail.com', logo: 'assets/logos/logo9.jpeg', website: 'https://www.dismaelec.com/', sector: 'Electrodomésticos' },
    { name: 'SANFERJUST CIA.LTDA.', contact: 'aldeanf@gmail.com', logo: 'assets/logos/logo10.jpeg', website: 'www.infor.com', sector: 'Comercio' },
    { name: 'PROCESADORA NACIONAL DE ALIMENTOS C.A. PRONACA', contact: 'eszambrano@pronaca.com', logo: 'assets/logos/logo11.jpg', website: 'https://pronaca.com/', sector: 'Alimentos' },
    { name: 'DISSOL', contact: 'jfierro@dissol.com.ec', logo: 'assets/logos/logo12.jpg', website: 'https://www.dissol.com.ec/', sector: 'Productos químicos' },
    { name: 'SCANNEREXPRESS SEGURIDAD INTEGRADA CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo13.jpg', website: 'https://www.gruposcanner.com/', sector: 'Seguridad' },
    { name: 'AGROEXPORTADORA ECUASPICES-CORP CIA.LTDA', contact: 'mgarcia@ecuaspices.com', logo: 'assets/logos/logo14.jpeg', website: 'www.infor.com', sector: 'Agricultura' },
    { name: 'HOTEL CASINO ZARACAY CIA. LTDA.', contact: 'mgabbysilva@hotmail.com', logo: 'assets/logos/logo15.jpg', website: 'https://hotelzaracaysantodomingo.com-hotel.com/es/', sector: 'Turismo' },
    { name: 'BLACK BRAND', contact: 'designo.murillo@gmail.com', logo: 'assets/logos/logo16.jpg', website: 'https://hernanmurillo.com/', sector: 'Moda' },
    { name: 'BAR RESTAURANTE LA PIEDRA', contact: 'angel_cevallos832002@hotmail.com', logo: 'assets/logos/logo17.png', website: 'https://www.instagram.com/lapiedrasd/?hl=es-la', sector: 'Restauración' },
    { name: 'ABAPEC DISTRIBUCIONES', contact: 'aidee1704@hotmail.com', logo: 'assets/logos/logo18.jpg', website: 'https://www.facebook.com/licoresabapec/?locale=es_LA', sector: 'Distribución' },
    { name: 'IMPORTADORA SERGIO', contact: 'semanec@hotmail.es', logo: 'assets/logos/logo19.jpg', website: 'https://www.importaciones-sergio.com/', sector: 'Importación' },
    { name: 'CORPORACION LOPEZ VILLAGOMEZ CIA. LTDA.', contact: 'gerencia@imporcol.com', logo: 'assets/logos/logo20.jpg', website: 'https://www.facebook.com/Corporacionlopezvillagomezcialtda/?locale=es_LA', sector: 'Corporativo' },
    { name: 'TROPICALEXPOR SA', contact: 'contabilidadgeneral@latzero.net', logo: 'assets/logos/logo21.jpg', website: 'www.infor.com', sector: 'Exportación' },
    { name: 'TAIMEC CIA.LTDA.', contact: 'dpenaherrera@taimec.com.ec', logo: 'assets/logos/logo22.jpg', website: 'https://www.taimec.online/', sector: 'Tecnología' },
    { name: 'COVERTOSA COVERTURA TOTAL S.A.', contact: 'rrhh@covertosa.com', logo: 'assets/logos/logo23.jpg', website: 'https://covertosascc.com/', sector: 'Construcción' },
    { name: 'COPETO CIA. LTDA.', contact: 'trajanor@copeto.com.ec', logo: 'assets/logos/logo24.png', website: 'https://www.copeto.com.ec/a/', sector: 'Construcción' },
    { name: 'WORKTRYMEC ELECTROMECANICA CIA LTDA', contact: 'info@worktrymec.com', logo: 'assets/logos/logo25.jpeg', website: 'https://www.worktrymec.com/', sector: 'Electromecánica' },
    { name: 'EMPROSERVIS CIA. LTDA', contact: 'diego@emproservis.com', logo: 'assets/logos/logo26.jpg', website: 'https://emproservis.com/', sector: 'Servicios' },
    { name: 'CORPROSEG CA AGENCIA ASESORA PRODUCTORA DE SEGUROS', contact: 'gerencia@corproseg.com', logo: 'assets/logos/logo27.jpg', website: 'https://www.corproseg.com/', sector: 'Seguros' },
    { name: 'MEGAPROELEC CIA LTDA', contact: 'gerencia@megaproelec.com', logo: 'assets/logos/logo28.jpeg', website: 'www.infor.com', sector: 'Electrónica' },
    { name: 'CRITERIUM CRITERIA & FINANCIAL CIA LTDA', contact: 'andres@criterium.com.ec', logo: 'assets/logos/logo29.png', website: 'www.infor.com', sector: 'Finanzas' },
    { name: 'CAMPUESA S.A', contact: 'info@gmail.com', logo: 'assets/logos/logo30.jpg', website: 'https://campuesa.com.ec/', sector: 'Industria' },
    { name: 'GS360 COMUNICACION INTEGRAL S.A.S.', contact: 'sanchezcgus@gmail.com', logo: 'assets/logos/logo31.png', website: 'www.infor.com', sector: 'Publicidad' },
    { name: 'PUNTO MADERA ESPINOZA LUGO WOODPOINT CIA LTDA', contact: 'mfespinoza@woodpoint.biz', logo: 'assets/logos/logo32.jpg', website: 'https://woodpoint.biz/', sector: 'Madera' },
    { name: 'D - ORLAND- CASVIMOR CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo33.png', website: 'https://www.facebook.com/grupodorland/?locale=es_LA', sector: 'Servicios' },
    { name: 'IMPORTADORA CASTRO', contact: 'juan@importadoracastro.com', logo: 'assets/logos/logo34.jpg', website: 'https://www.importadoracastro.com/', sector: 'Importación' },
    { name: 'BALSEBOT CORP', contact: 'info@gmail.com', logo: 'assets/logos/logo35.jpeg', website: 'https://www.facebook.com/grupobalsebot/?locale=es_LA', sector: 'Corporativo' },
    { name: 'KUBIEC S.A', contact: 'paul.jaramillo@kubiec.com', logo: 'assets/logos/logo36.png', website: 'https://kubiec.com/cubiertas-y-revestimientos/residenciales/kubiteja/?gad_source=1&gclid=Cj0KCQjw782_BhDjARIsABTv_JB22A83XXmrYT7CS97QuvkE1DxWg2aEpO2Y1mVnIvob48nGoWpe1WYaAsgPEALw_wcB', sector: 'Tecnología' },
    { name: 'BANCO PROCREDIT', contact: 'miguel.ebenberger@procredit-group.com', logo: 'assets/logos/logo38.jpg', website: 'https://bancoprocredit.com.ec/', sector: 'Finanzas' },
    { name: 'IMPORTCEN', contact: 'info@gmail.com', logo: 'assets/logos/logo44.jpg', website: 'www.infor.com', sector: 'Importación' },
    { name: 'SYSTENWORK - CONTAMATIC', contact: 'systemworksa@gmail.com', logo: 'assets/logos/logo49.jpeg', website: 'https://contamatic.ec/', sector: 'Tecnología' },
    { name: 'DISLICOR', contact: 'dislicor.distribuciones@gmail.com', logo: 'assets/logos/logo50.jpg', website: 'https://www.facebook.com/DISLICOR/?locale=es_LA', sector: 'Licor' },
    { name: 'AGROTORCA', contact: 'info@gmail.com', logo: 'assets/logos/logo51.png', website: 'https://ppfam.com/AGROTORCA/3918/', sector: 'Agricultura' }
];


  filteredCompanies = [...this.companies];
  visibleCompanies = this.filteredCompanies.slice(0, 4);
showForm: any;

  filterCompanies() {
    const query = this.searchQuery.toLowerCase();
    this.filteredCompanies = this.companies.filter(company =>
      company.name.toLowerCase().includes(query) ||
      company.sector.toLowerCase().includes(query)
    );
    this.visibleCompanies = this.showAllCompanies ? this.filteredCompanies : this.filteredCompanies.slice(0, 4);
  }

  toggleShowAll() {
    this.showAllCompanies = !this.showAllCompanies;
    this.visibleCompanies = this.showAllCompanies ? this.filteredCompanies : this.filteredCompanies.slice(0, 4);
  }

  sendEmail(email: string) {
    if (email) {
      window.location.href = `mailto:${email}`;
    } else {
      alert("Esta empresa no tiene correo disponible.");
    }
  }

  goToCompanyWebsite(url: string) {
    window.open(url, '_blank');
  }

  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }
  closeForm() {
    this.showForm = false;
  }
 
}
