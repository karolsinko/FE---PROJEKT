import { TestBed } from '@angular/core/testing';

import { VakcinaServiceService } from './vakcina-service.service';

describe('VakcinaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: VakcinaServiceService = TestBed.get(VakcinaServiceService);
    expect(service).toBeTruthy();
  });
});
