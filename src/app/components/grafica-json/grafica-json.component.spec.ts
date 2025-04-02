import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficaJsonComponent } from './grafica-json.component';

describe('GraficaJsonComponent', () => {
  let component: GraficaJsonComponent;
  let fixture: ComponentFixture<GraficaJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GraficaJsonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GraficaJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
