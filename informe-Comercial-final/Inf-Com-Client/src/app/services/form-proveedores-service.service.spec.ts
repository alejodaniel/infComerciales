import { TestBed } from '@angular/core/testing';

import { FormProveedoresServiceService } from './form-proveedores-service.service';

describe('FormProveedoresServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FormProveedoresServiceService = TestBed.get(FormProveedoresServiceService);
    expect(service).toBeTruthy();
  });
});
