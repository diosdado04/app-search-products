import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule],
})
export class FooterComponent {
  note = 'Trabajamos siempre pensando en usted.Servicio rápido,seguro y estable 24h.';
  yearActual = new Date().getFullYear();
}
