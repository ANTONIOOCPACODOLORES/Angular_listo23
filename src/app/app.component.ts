import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { ContentComponent } from './components/content/content.component';
import { BreadcrumbComponent } from './components/breadcrumb/breadcrumb.component';
import { FooterComponent } from './components/footer/footer.component';
import { LoginComponent } from './components/login/login.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    NavbarComponent,
    SidebarComponent,
    BreadcrumbComponent,
    FooterComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})

export class AppComponent {
  isAuthenticated: boolean = false;
  sidebarVisible: boolean = true;

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

  toggleSidebar() {
    this.sidebarVisible = !this.sidebarVisible;
  }
}
