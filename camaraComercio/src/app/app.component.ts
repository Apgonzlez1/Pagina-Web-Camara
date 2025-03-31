import { Component, inject } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component'; // <-- Importa el footer
import { TranslocoModule, TranslocoService } from '@jsverse/transloco';
import { AvaliableLanguages } from './transloco-config';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet, 
    NavbarComponent, 
    FooterComponent,
    TranslocoModule
  ],

  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public languages = AvaliableLanguages; // Expose the enum

  constructor(private transloco: TranslocoService) {}

  changeLang(lang: AvaliableLanguages) {
    this.transloco.setActiveLang(lang);
  }

  public getLanguage() {
    return 'languages.' + this.transloco.getActiveLang();
  }

  title = 'camaraComercio';
}

