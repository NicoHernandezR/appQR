import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ListaAsignaturaPage } from './lista-asignatura.page';

describe('ListaAsignaturaPage', () => {
  let component: ListaAsignaturaPage;
  let fixture: ComponentFixture<ListaAsignaturaPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ListaAsignaturaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
