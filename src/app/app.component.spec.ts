import { TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { Grafica1Component } from './components/grafica-basica/grafica1.component'; // Añade esta importación

describe('AppComponent', () => {
  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        Grafica1Component, // Añade el componente aquí
      ],
      // imports: [AppComponent], // Esto no es necesario para componentes
    }).compileComponents();
  });

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });

  it(`should have the correct title`, () => {
    // Mejor descripción
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('practica-07_230642'); // Asegúrate que coincida con tu componente real
  });

  it('should render title', () => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('h1')?.textContent).toContain(
      'practica-07_230642'
    ); // Ajusta según tu template
  });
});
