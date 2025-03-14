import { Component, OnInit, Output, EventEmitter } from '@angular/core'; // Importa Output y EventEmitter
import { CommonModule } from '@angular/common'; // Importa CommonModule
import { PracticeService } from '../../services/practice.service';

@Component({
  selector: 'app-sidebar',
  standalone: true, // Asegúrate de que standalone esté habilitado
  imports: [CommonModule], // Agrega CommonModule aquí
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  isVisible: boolean = true;
  selectedPractice:  {
    title: string;
    description: string;
    objective: string;
    unit: string;
  } | null = null;
  @Output() toggleSidebar = new EventEmitter<void>(); // Usa Output y EventEmitter

  constructor(private practiceService: PracticeService) {}

  ngOnInit() {
    this.practiceService.selectedPractice$.subscribe((practice) => {
      this.selectedPractice = practice;
    });
  }

  toggle() {
    this.isVisible = !this.isVisible;
    this.toggleSidebar.emit();
  }
}