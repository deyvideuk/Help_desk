import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Desenvolvendo } from './desenvolvendo';

describe('Desenvolvendo', () => {
  let component: Desenvolvendo;
  let fixture: ComponentFixture<Desenvolvendo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Desenvolvendo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Desenvolvendo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
