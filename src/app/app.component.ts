import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, NavbarComponent, SidebarComponent, ContentComponent, BreadcrumbComponent, FooterComponent, LoginComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isAuthenticated: boolean = false;
  sidebarVisible: boolean = true; // <-- Agregar esta propiedad

  constructor() {
    const storedAuth = localStorage.getItem('isAuthenticated');
    this.isAuthenticated = storedAuth === 'true';
  }

  handleLogin() {
    this.isAuthenticated = true;
    localStorage.setItem('isAuthenticated', 'true');
  }

  handleLogout() {
    this.isAuthenticated = false;
    localStorage.setItem('isAuthenticated', 'false');
  }

  toggleSidebar() { // <-- Agregar esta función para el sidebar
    this.sidebarVisible = !this.sidebarVisible;
  }
}