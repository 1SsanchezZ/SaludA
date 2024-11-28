import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MedicacionesPage } from './medicaciones.page';

describe('MedicacionesPage', () => {
  let component: MedicacionesPage;
  let fixture: ComponentFixture<MedicacionesPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
