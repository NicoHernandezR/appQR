import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InfoAsignaturaPage } from './info-asignatura.page';

describe('InfoAsignaturaPage', () => {
  let component: InfoAsignaturaPage;
  let fixture: ComponentFixture<InfoAsignaturaPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(InfoAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
