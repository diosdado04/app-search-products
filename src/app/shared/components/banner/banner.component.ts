import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { MaterialModuleModule } from 'src/app/modules/material-module/material-module.module';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss'],
  standalone: true,
  imports: [CommonModule, MaterialModuleModule],
})
export class BannerComponent {}
