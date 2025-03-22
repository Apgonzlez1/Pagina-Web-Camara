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

  companies = Array.from({ length: 51 }, (_, i) => ({
    name: `Empresa ${i + 1}`,
    contact: `contacto@empresa${i + 1}.com`,
    logo: `assets/logo${(i % 6) + 1}.png`,
    website: `https://empresa${i + 1}.com`,
    sector: ['Manufactura', 'Logística', 'Tecnología', 'Finanzas', 'Construcción', 'Salud'][i % 6]
  }));
  

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
