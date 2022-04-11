import { TestBed } from '@angular/core/testing';

import { OsobaServiceService } from './osoba-service.service';

describe('OsobaServiceService', () => {
  let service: OsobaServiceService;

  beforeEach(() => TestBed.configureTestingModule({});
  service = TestBed.inject(OsobaServiceService);

  it('should be created', () => {;
    expect(service).toBeTruthy();
  });
});
