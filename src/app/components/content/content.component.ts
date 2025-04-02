import { Component, OnInit } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { PracticeService } from '../../services/practice.service';
import { RouterOutlet } from '@angular/router';
import { GraficaBasicaComponent } from '../grafica-basica/grafica1.component';
import { Grafica2Component } from '../grafica-asignada/grafica2.component';
import { GraficaJsonComponent } from '../grafica-json/grafica-json.component';
import { Table1Component } from '../table-basica/table1.component';
import { Table2Component } from '../table-json/table2.component';
import { TablesComponent } from '../table-assign/tables.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
    RouterOutlet,
    Grafica2Component,
    GraficaBasicaComponent,
    GraficaJsonComponent,
    Table1Component,
    Table2Component,
    TablesComponent
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css',
})
export class ContentComponent implements OnInit {
  selectedPractice: { title: string; description: string } | null = null;
  activeComponent: string = '';
  // Variables para la Práctica 5
  users = [
    { id: 0, name: 'Josue' },
    { id: 1, name: 'Anthony' },
    { id: 2, name: 'Andrea' },
    { id: 3, name: 'Dulce' },
    { id: 4, name: 'Jesus A.' },
  ];

  // Variables para la Práctica 6
  isEditable = true;

  // Variables para la Práctica 7
  message = '';

  // Variables para la Práctica 9
  items: string[] = [];

  // Variables para la Práctica 10
  showComments = false;

  // Variables para la Práctica 11
  logoUrl = '/assets/logo.svg';
  logoAlt = 'Angular logo';
  usuario = 'Anthony';

  constructor(private practiceService: PracticeService) {}

  ngOnInit() {
    this.practiceService.selectedPractice$.subscribe((practice) => {
      this.selectedPractice = practice;
    });
  }

  // Método para la Práctica 7
  onMouseOver() {
    this.message = 'Hola Ten un bonito día, soy Anthony.';
  }

  // Método para la Práctica 9
  addItem() {
    this.items.push('🐢');
  }

  // Método para la Práctica 10
  loadComments() {
    this.showComments = true;
  }

  // Método para cambiar el componente visible
  changeComponent(component: string) {
    this.activeComponent = component;
  }
}
