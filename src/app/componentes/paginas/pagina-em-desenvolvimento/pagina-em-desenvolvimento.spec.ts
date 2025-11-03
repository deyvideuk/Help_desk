import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaginaEmDesenvolvimento } from './pagina-em-desenvolvimento';

describe('PaginaEmDesenvolvimento', () => {
  let component: PaginaEmDesenvolvimento;
  let fixture: ComponentFixture<PaginaEmDesenvolvimento>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PaginaEmDesenvolvimento]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PaginaEmDesenvolvimento);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
