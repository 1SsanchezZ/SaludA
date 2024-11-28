import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EstaturaPage } from './estatura.page';

describe('EstaturaPage', () => {
  let component: EstaturaPage;
  let fixture: ComponentFixture<EstaturaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(EstaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
