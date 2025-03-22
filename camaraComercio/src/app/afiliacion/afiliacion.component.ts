import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-afiliacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
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
    { name: 'FGENTERPRISE S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo1.jpg', website: 'www.infor.com', sector: 'Manufactura' },
    { name: 'FRUGALP S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo2.jpg', website: 'www.infor.com', sector: 'Logística' },
    { name: 'LACTEOS LA POLACA GUSTALAC S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo3.jpg', website: 'www.infor.com', sector: 'Alimentos' },
    { name: 'BURNEO EXPORT', contact: 'info@gmail.com', logo: 'assets/logos/logo4.jpg', website: 'www.infor.com', sector: 'Exportación' },
    { name: 'HOTEL GOLDEN VISTA', contact: 'info@gmail.com', logo: 'assets/logos/logo5.png', website: 'www.infor.com', sector: 'Turismo' },
    { name: 'INDUSTRIA DE CAUCHO Y ACERO VITERI INCAVIT S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo6.jpeg', website: 'www.infor.com', sector: 'Industria' },
    { name: 'RHINOPLAST S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo7.png', website: 'www.infor.com', sector: 'Salud' },
    { name: '3 A.N.G. ADMINISTRACION DE NEGOCIOS GERENCIALES CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo8.jpeg', website: 'www.infor.com', sector: 'Consultoría' },
    { name: 'DISMAELEC', contact: 'info@gmail.com', logo: 'assets/logos/logo9.jpeg', website: 'www.infor.com', sector: 'Electrodomésticos' },
    { name: 'SANFERJUST CIA.LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo10.jpeg', website: 'www.infor.com', sector: 'Comercio' },
    { name: 'PROCESADORA NACIONAL DE ALIMENTOS C.A. PRONACA', contact: 'info@gmail.com', logo: 'assets/logos/logo11.jpg', website: 'www.infor.com', sector: 'Alimentos' },
    { name: 'DISSOL', contact: 'info@gmail.com', logo: 'assets/logos/logo12.jpg', website: 'www.infor.com', sector: 'Productos químicos' },
    { name: 'SCANNEREXPRESS SEGURIDAD INTEGRADA CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo13.png', website: 'www.infor.com', sector: 'Seguridad' },
    { name: 'AGROEXPORTADORA ECUASPICES-CORP CIA.LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo14.jpeg', website: 'www.infor.com', sector: 'Agricultura' },
    { name: 'HOTEL CASINO ZARACAY CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo15.jpg', website: 'www.infor.com', sector: 'Turismo' },
    { name: 'BLACK BRAND', contact: 'info@gmail.com', logo: 'assets/logos/logo16.jpg', website: 'www.infor.com', sector: 'Moda' },
    { name: 'BAR RESTAURANTE LA PIEDRA', contact: 'info@gmail.com', logo: 'assets/logos/logo17.png', website: 'www.infor.com', sector: 'Restauración' },
    { name: 'ABAPEC DISTRIBUCIONES', contact: 'info@gmail.com', logo: 'assets/logos/logo18.jpg', website: 'www.infor.com', sector: 'Distribución' },
    { name: 'IMPORTADORA SERGIO', contact: 'info@gmail.com', logo: 'assets/logos/logo19.jpg', website: 'www.infor.com', sector: 'Importación' },
    { name: 'CORPORACION LOPEZ VILLAGOMEZ CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo20.jpg', website: 'www.infor.com', sector: 'Corporativo' },
    { name: 'TROPICALEXPOR SA', contact: 'info@gmail.com', logo: 'assets/logos/logo21.jpg', website: 'www.infor.com', sector: 'Exportación' },
    { name: 'TAIMEC CIA.LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo22.jpg', website: 'www.infor.com', sector: 'Tecnología' },
    { name: 'COVERTOSA COVERTURA TOTAL S.A.', contact: 'info@gmail.com', logo: 'assets/logos/logo23.jpg', website: 'www.infor.com', sector: 'Construcción' },
    { name: 'COPETO CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo24.png', website: 'www.infor.com', sector: 'Construcción' },
    { name: 'WORKTRYMEC ELECTROMECANICA CIA LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo25.jpeg', website: 'www.infor.com', sector: 'Electromecánica' },
    { name: 'EMPROSERVIS CIA. LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo26.jpeg', website: 'www.infor.com', sector: 'Servicios' },
    { name: 'CORPROSEG CA AGENCIA ASESORA PRODUCTORA DE SEGUROS', contact: 'info@gmail.com', logo: 'assets/logos/logo27.jpg', website: 'www.infor.com', sector: 'Seguros' },
    { name: 'MEGAPROELEC CIA LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo28.jpeg', website: 'www.infor.com', sector: 'Electrónica' },
    { name: 'CRITERIUM CRITERIA & FINANCIAL CIA LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo29.png', website: 'www.infor.com', sector: 'Finanzas' },
    { name: 'CAMPUESA S.A', contact: 'info@gmail.com', logo: 'assets/logos/logo30.jpg', website: 'www.infor.com', sector: 'Industria' },
    { name: 'GS360 COMUNICACION INTEGRAL S.A.S.', contact: 'info@gmail.com', logo: 'assets/logos/logo31.png', website: 'www.infor.com', sector: 'Publicidad' },
    { name: 'PUNTO MADERA ESPINOZA LUGO WOODPOINT CIA LTDA', contact: 'info@gmail.com', logo: 'assets/logos/logo32.jpg', website: 'www.infor.com', sector: 'Madera' },
    { name: 'D - ORLAND- CASVIMOR CIA. LTDA.', contact: 'info@gmail.com', logo: 'assets/logos/logo33.png', website: 'www.infor.com', sector: 'Servicios' },
    { name: 'IMPORTADORA CASTRO', contact: 'info@gmail.com', logo: 'assets/logos/logo34.jpg', website: 'www.infor.com', sector: 'Importación' },
    { name: 'BALSEBOT CORP', contact: 'info@gmail.com', logo: 'assets/logos/logo35.jpeg', website: 'www.infor.com', sector: 'Corporativo' },
    { name: 'KUBIEC S.A', contact: 'info@gmail.com', logo: 'assets/logos/logo36.png', website: 'www.infor.com', sector: 'Tecnología' },
    { name: 'BANCO PROCREDIT', contact: 'info@gmail.com', logo: 'assets/logos/logo38.jpg', website: 'www.infor.com', sector: 'Finanzas' },
    { name: 'IMPORTCEN', contact: 'info@gmail.com', logo: 'assets/logos/logo44.png', website: 'www.infor.com', sector: 'Importación' },
    { name: 'SYSTENWORK - CONTAMATIC', contact: 'info@gmail.com', logo: 'assets/logos/logo49.jpeg', website: 'www.infor.com', sector: 'Tecnología' },
    { name: 'DISLICOR', contact: 'info@gmail.com', logo: 'assets/logos/logo50.jpg', website: 'www.infor.com', sector: 'Licor' },
    { name: 'AGROTORCA', contact: 'info@gmail.com', logo: 'assets/logos/logo51.png', website: 'www.infor.com', sector: 'Agricultura' }
];


  filteredCompanies = [...this.companies];
  visibleCompanies = this.filteredCompanies.slice(0, 4);

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

  submitForm() {
    console.log('Formulario enviado:', {
      name: this.name,
      email: this.email,
      company: this.company,
      phone: this.phone,
      document: this.document
    });
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.document = file;
    }
  }
}
