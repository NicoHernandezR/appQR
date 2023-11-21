import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ScanerQrPage } from './scaner-qr.page';

describe('ScanerQrPage', () => {
  let component: ScanerQrPage;
  let fixture: ComponentFixture<ScanerQrPage>;

  beforeEach(async() => {
    fixture = TestBed.createComponent(ScanerQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
