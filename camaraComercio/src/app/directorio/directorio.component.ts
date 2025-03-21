import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-directorio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './directorio.component.html',
  styleUrls: ['./directorio.component.css']
})
export class DirectorioComponent {
  searchQuery: string = '';

  companies = [
    {
      name: 'Empresa A',
      description: 'Líder en manufactura y producción industrial.',
      contact: '+593 999 123 456',
      logo: 'assets/logo1.png',
      website: 'https://empresa-a.com',
      sector: 'Manufactura'
    },
    {
      name: 'Empresa B',
      description: 'Especialista en logística y distribución.',
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa C',
      description: 'Proveedor de tecnología avanzada.',
      contact: '+593 987 654 321',
      logo: 'assets/logo3.png',
      website: 'https://empresa-c.com',
      sector: 'Tecnología'
    },
    {
      name: 'Empresa uno',
      description: 'Líder en manufactura y producción industrial.',
      contact: 'info@empresa-uno.com',
      logo: 'assets/logo1.png',
      website: 'https://empresa-a.com',
      sector: 'Manufactura'
    },
    {
      name: 'Empresa dos',
      description: 'Especialista en logística y distribución.',
      contact: '+593 555 666 777',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa tres',
      description: 'Proveedor de tecnología avanzada.',
      contact: 'empresa3@tech.com',
      logo: 'assets/logo3.png',
      website: 'https://empresa-c.com',
      sector: 'Tecnología'
    },
    {
      name: 'Empresa A',
      description: 'Especialista en logística y distribución.',
      contact: '+593 333 222 111',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa BC',
      description: 'Proveedor de tecnología avanzada.',
      contact: 'info@empresabc.com',
      logo: 'assets/logo3.png',
      website: 'https://empresa-c.com',
      sector: 'Tecnología'
    }
  ];
  

  filteredCompanies = [...this.companies];

  filterCompanies() {
    const query = this.searchQuery.toLowerCase();
    this.filteredCompanies = this.companies.filter(company =>
      company.name.toLowerCase().includes(query) ||
      company.sector.toLowerCase().includes(query)
    );
  }

  goToCompanyWebsite(url: string) {
    window.open(url, '_blank');
  }
  openWhatsApp() {
    window.open('https://api.whatsapp.com/send/?phone=593999989256&text&type=phone_number&app_absent=0', '_blank');
  }

}
