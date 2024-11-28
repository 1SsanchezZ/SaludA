import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PasosPage } from './pasos.page';

describe('PasosPage', () => {
  let component: PasosPage;
  let fixture: ComponentFixture<PasosPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(PasosPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
