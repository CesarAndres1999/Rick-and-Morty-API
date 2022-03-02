import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndPersonajeComponent } from './ind-personaje.component';

describe('IndPersonajeComponent', () => {
  let component: IndPersonajeComponent;
  let fixture: ComponentFixture<IndPersonajeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndPersonajeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndPersonajeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
