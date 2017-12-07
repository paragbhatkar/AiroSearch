import { TestBed, inject } from '@angular/core/testing';

import { AirlinedataService } from './airlinedata.service';

describe('AirlinedataService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirlinedataService]
    });
  });

  it('should be created', inject([AirlinedataService], (service: AirlinedataService) => {
    expect(service).toBeTruthy();
  }));
});
