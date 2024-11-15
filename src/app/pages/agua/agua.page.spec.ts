import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AguaPage } from './agua.page';

describe('AguaPage', () => {
  let component: AguaPage;
  let fixture: ComponentFixture<AguaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(AguaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
