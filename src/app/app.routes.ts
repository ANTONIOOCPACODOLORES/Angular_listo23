import { Routes } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ContentComponent } from './components/content/content.component';
import { GraficaBasicaComponent } from './grafica1/grafica1.component';
import { Grafica2Component } from './grafica2/grafica2.component';
import { Table1Component } from './tables/table1/table1.component';
import { Table2Component } from './tables/table2/table2.component';

export const routes: Routes = [
  // Página principal
  { path: '', component: ContentComponent },
  
  // Login
  { path: 'login', component: LoginComponent },

  // Tablas
  { path: 'simple-table', component: Table1Component },
  { path: 'dataTable-table', component: Table2Component },

  // Gráficas
  { path: 'basic-graph', component: GraficaBasicaComponent },
  { path: 'assigned-graph', component: Grafica2Component },

  // Redirección para rutas no encontradas
  { path: '**', redirectTo: 'login' }
];