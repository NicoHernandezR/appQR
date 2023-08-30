import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AsignaturasProfesPage } from './asignaturas-profes.page';

describe('AsignaturasProfesPage', () => {
  let component: AsignaturasProfesPage;
  let fixture: ComponentFixture<AsignaturasProfesPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(AsignaturasProfesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
