import { TestBed } from '@angular/core/testing';

import { NoSesionGuard } from './no-sesion.guard';

describe('NoSesionGuard', () => {
  let guard: NoSesionGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(NoSesionGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
