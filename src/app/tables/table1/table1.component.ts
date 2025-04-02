import { Component } from '@angular/core';

interface Persona {
  id: number;
  nombre: string;
  apellido: string;
  pais: string;
}

@Component({
  selector: 'app-table1',
  templateUrl: './table1.component.html',
  styleUrls: ['./table1.component.css']
})
export class Table1Component {
  personas: Persona[] = [ // ← El nombre DEBE coincidir con el usado en el HTML
    { id: 1, nombre: "Ana", apellido: "Gómez", pais: "México" },
    { id: 2, nombre: "Luis", apellido: "Fernández", pais: "España" },
    { id: 3, nombre: "Sakura", apellido: "Tanaka", pais: "Japón" },
    { id: 4, nombre: "Giovanni", apellido: "Rossi", pais: "Italia" },
    { id: 5, nombre: "Olivia", apellido: "Smith", pais: "Australia" },
    { id: 6, nombre: "Mohamed", apellido: "El-Masri", pais: "Egipto" },
    { id: 7, nombre: "Emma", apellido: "Johnson", pais: "Canadá" },
    { id: 8, nombre: "Raj", apellido: "Patel", pais: "India" },
    { id: 9, nombre: "Sophie", apellido: "Martin", pais: "Francia" },
    { id: 10, nombre: "Carlos", apellido: "Silva", pais: "Brasil" },
    { id: 11, nombre: "Yuki", apellido: "Yamamoto", pais: "Japón" },
    { id: 12, nombre: "Hans", apellido: "Müller", pais: "Alemania" },
    { id: 13, nombre: "Laila", apellido: "Abdullah", pais: "Arabia Saudita" },
    { id: 14, nombre: "James", apellido: "Wilson", pais: "Reino Unido" },
    { id: 15, nombre: "Isabella", apellido: "García", pais: "Argentina" },
    { id: 16, nombre: "Chen", apellido: "Wei", pais: "China" },
    { id: 17, nombre: "Nadia", apellido: "Ivanova", pais: "Rusia" },
    { id: 18, nombre: "Diego", apellido: "Rodríguez", pais: "Colombia" },
    { id: 19, nombre: "Amina", apellido: "Diallo", pais: "Senegal" },
    { id: 20, nombre: "Thomas", apellido: "Anderson", pais: "Estados Unidos" },
    { id: 21, nombre: "Elena", apellido: "Papadopoulos", pais: "Grecia" },
    { id: 22, nombre: "Javier", apellido: "López", pais: "Chile" },
    { id: 23, nombre: "Fatima", apellido: "Al-Mansoori", pais: "Emiratos Árabes" },
    { id: 24, nombre: "Daniel", apellido: "Nygaard", pais: "Noruega" },
    { id: 25, nombre: "Mia", apellido: "Van der Berg", pais: "Sudáfrica" },
    { id: 26, nombre: "Mateo", apellido: "Kowalski", pais: "Polonia" }
  ];
}
