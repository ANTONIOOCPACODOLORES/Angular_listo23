import { Component, Output, EventEmitter } from '@angular/core';
import { PracticeService } from '../../services/practice.service'; // Ajusta la ruta según tu estructura
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  @Output() logoutEvent = new EventEmitter<void>();

  constructor(private practiceService: PracticeService) {} // Inyecta el servicio

  logout() {
    console.log("⛔ Click en Sign Out");
    this.logoutEvent.emit();
  }

  selectPractice(practice: string) {
    this.practiceService.setSelectedPractice(practice); // Usa el servicio para enviar la práctica
  }
}