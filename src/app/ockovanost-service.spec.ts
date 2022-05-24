import { TestBed } from '@angular/core/testing';
import {OckovanostServiceService} from "./ockovanost-service.service";


describe('OckovanostServiceService', () => {
  let service: OckovanostServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OckovanostServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
