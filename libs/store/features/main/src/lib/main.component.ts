import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from '@my-apps/header';

@Component({
  selector: 'lib-main',
  standalone: true,
  imports: [CommonModule,HeaderComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.css',
})
export class MainComponent {}
