import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CafeinaPage } from './cafeina.page';

describe('CafeinaPage', () => {
  let component: CafeinaPage;
  let fixture: ComponentFixture<CafeinaPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(CafeinaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
