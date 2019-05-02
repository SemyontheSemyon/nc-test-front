import {TestBed} from '@angular/core/testing';

import {CityService} from '../dto/city.service';

describe('CityService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CityService = TestBed.get(CityService);
    expect(service).toBeTruthy();
  });
});
