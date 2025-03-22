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
  sendEmail(email: string) {
    window.location.href = `mailto:${email}`;
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.document = file;
    }
  }

  submitForm() {
    console.log('Formulario enviado:', {
      name: this.name,
      email: this.email,
      company: this.company,
      phone: this.phone,
      document: this.document
    });

    // Aquí puedes llamar a un servicio para enviar los datos al backend
  }
  searchQuery: string = '';

  companies = [
    {
      name: 'Empresa A',
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo1.png',
      website: 'https://empresa-a.com',
      sector: 'Manufactura'
    },
    {
      name: 'Empresa B',
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa C',
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo3.png',
      website: 'https://empresa-c.com',
      sector: 'Tecnología'
    },
    {
      name: 'Empresa uno',
      
      contact: 'info@empresa-uno.com',
      logo: 'assets/logo1.png',
      website: 'https://empresa-a.com',
      sector: 'Manufactura'
    },
    {
      name: 'Empresa dos',
      
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa tres',
  
      contact: 'empresa3@tech.com',
      logo: 'assets/logo3.png',
      website: 'https://empresa-c.com',
      sector: 'Tecnología'
    },
    {
      name: 'Empresa A',
      contact: 'contacto@empresa-b.com',
      logo: 'assets/logo2.png',
      website: 'https://empresa-b.com',
      sector: 'Logística'
    },
    {
      name: 'Empresa BC',
     
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