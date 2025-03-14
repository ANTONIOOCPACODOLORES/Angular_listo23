import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PracticeService {
  private selectedPracticeSubject = new BehaviorSubject<{ title: string, description: string, objective: string, unit: string } | null>(null);
  selectedPractice$ = this.selectedPracticeSubject.asObservable();

  // Objeto con las descripciones de las prácticas
  private practiceDescriptions: { [key: string]: { title: string, description: string, objective: string, unit: string } } = {
    '1. Components in Angular': {
      title: '1. Components in Angular',
      description: 'Se introduce el concepto de componentes en Angular, explicando cómo son la base de cualquier aplicación Angular. Aprenderás a crear un componente usando el decorador @Component, definir su plantilla HTML y su hoja de estilos, y cómo integrarlo dentro de una aplicación.',
      objective: 'Comprender la estructura básica de un componente en Angular y cómo se integra en una aplicación.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '2. Updating the Component Class': {
      title: '2. Updating the Component Class',
      description: 'Se trabaja con la clase del componente para agregar lógica y manejar datos. Aprenderás a definir propiedades y métodos dentro del componente, así como a modificar el estado y reflejar esos cambios en la plantilla usando el enlace de datos ({{ }}).',
      objective: 'Aprender a manejar el estado y la lógica dentro de un componente.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '3. Composing Components': {
      title: '3. Composing Components',
      description: 'Aquí se aprende cómo dividir la aplicación en múltiples componentes para mejorar la organización y la reutilización del código. Aprenderás cómo un componente padre puede contener varios componentes hijos y cómo estos pueden interactuar entre sí.',
      objective: 'Entender cómo componer aplicaciones con múltiples componentes.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '4. Control Flow in Components - if': {
      title: '4. Control Flow in Components - if',
      description: 'Se estudia el uso de la directiva estructural *ngIf, que permite mostrar u ocultar elementos en función de una condición. Se explicará cómo usar *ngIf junto con variables de estado en el componente para controlar la visibilidad de secciones de la interfaz.',
      objective: 'Aprender a controlar el flujo de la interfaz con *ngIf.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '5. Control Flow in Components - for': {
      title: '5. Control Flow in Components - for',
      description: 'En esta práctica se introduce la directiva *ngFor, que permite recorrer arreglos y generar elementos dinámicamente en la plantilla. Se aprenderá cómo iterar sobre una lista de elementos y cómo mostrar información de cada uno en la interfaz de usuario.',
      objective: 'Aprender a generar contenido dinámico con *ngFor.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '6. Property Binding in Angular': {
      title: '6. Property Binding in Angular',
      description: 'Se explora el concepto de "enlace de propiedades" o property binding, utilizando corchetes ([]) para vincular propiedades del componente a atributos del DOM. Se verá cómo actualizar dinámicamente el contenido de un elemento HTML con datos provenientes del componente.',
      objective: 'Entender cómo vincular propiedades del componente al DOM.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '7. Event Handling': {
      title: '7. Event Handling',
      description: 'Se aprende a manejar eventos en Angular, como click, keyup, y change. Se explicará cómo capturar estos eventos en la plantilla y llamar a métodos en el componente para responder a ellos. También se abordará el uso de $event para obtener información adicional sobre el evento.',
      objective: 'Aprender a manejar eventos en Angular.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '8. Component Communication with Input': {
      title: '8. Component Communication with Input',
      description: 'Se introduce la comunicación entre componentes usando @Input(). Se explicará cómo un componente padre puede enviar datos a un componente hijo mediante la vinculación de propiedades, permitiendo crear componentes más dinámicos y reutilizables.',
      objective: 'Entender cómo comunicar componentes usando @Input().',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '9. Component Communication with Output': {
      title: '9. Component Communication with Output',
      description: 'En esta práctica se trabaja con Output() y EventEmitter para que un componente hijo pueda enviar información de vuelta a su componente padre. Se verán ejemplos como la emisión de eventos personalizados y cómo manejar esta comunicación en la aplicación.',
      objective: 'Aprender a comunicar componentes usando @Output().',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '10. Deferrable Views': {
      title: '10. Deferrable Views',
      description: 'Se introduce el concepto de "vistas diferidas" o Deferrable Views, una característica reciente de Angular que permite cargar partes de la interfaz de usuario de manera diferida para mejorar el rendimiento. Se explicará cómo usar ng-defer para reducir la carga inicial de la aplicación.',
      objective: 'Entender cómo mejorar el rendimiento con vistas diferidas.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '11. Optimizing Images': {
      title: '11. Optimizing Images',
      description: 'Se abordan estrategias para mejorar la carga de imágenes en Angular, como lazy loading, srcset para servir imágenes en diferentes resoluciones y optimización de formatos de imagen. Se explicará cómo estas técnicas ayudan a mejorar la velocidad de carga de la aplicación.',
      objective: 'Aprender a optimizar imágenes en Angular.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    },
    '12. Routing Overview': {
      title: '12. Routing Overview',
      description: 'Se introduce el sistema de enrutamiento de Angular con RouterModule. Se explicará cómo definir rutas, navegar entre vistas utilizando routerLink, configurar rutas dinámicas con parámetros y manejar rutas protegidas para restringir el acceso a ciertas páginas.',
      objective: 'Entender cómo funciona el enrutamiento en Angular.',
      unit: 'Unidad 2: Framework para Web Empresarial'
    }
  };

  setSelectedPractice(practice: string) {
    const selectedPractice = this.practiceDescriptions[practice];
    if (selectedPractice) {
      this.selectedPracticeSubject.next(selectedPractice);
    }
  }
}