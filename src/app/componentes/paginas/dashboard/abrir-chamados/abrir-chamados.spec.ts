import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AbrirChamados } from './abrir-chamados';

describe('AbrirChamados', () => {
  let component: AbrirChamados;
  let fixture: ComponentFixture<AbrirChamados>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AbrirChamados]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AbrirChamados);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
