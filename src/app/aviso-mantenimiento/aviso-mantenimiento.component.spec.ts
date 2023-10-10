import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvisoMantenimientoComponent } from './aviso-mantenimiento.component';

describe('AvisoMantenimientoComponent', () => {
  let component: AvisoMantenimientoComponent;
  let fixture: ComponentFixture<AvisoMantenimientoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AvisoMantenimientoComponent]
    });
    fixture = TestBed.createComponent(AvisoMantenimientoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
