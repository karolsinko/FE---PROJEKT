import { TestBed } from '@angular/core/testing';

import { VakcinaServiceService } from './vakcina-service.service';

describe('VakcinaServiceService', () => {
  let service: VakcinaServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VakcinaServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
