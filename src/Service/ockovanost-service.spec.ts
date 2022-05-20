import { TestBed } from '@angular/core/testing';
import {OckovanostServiceService} from "./ockovanost-service.service";



describe('OsobaServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OckovanostServiceService = TestBed.get(OckovanostServiceService);
    expect(service).toBeTruthy();
  });
});
