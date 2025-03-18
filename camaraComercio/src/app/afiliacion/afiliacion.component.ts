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
}
