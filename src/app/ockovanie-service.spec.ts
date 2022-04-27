import { TestBed } from '@angular/core/testing';
import {OckovanieServiceService} from "./ockovanie-service.service";


describe('OckovanieServiceService', () => {
  let service: OckovanieServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OckovanieServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
