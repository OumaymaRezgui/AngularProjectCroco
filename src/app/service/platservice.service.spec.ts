import { TestBed } from '@angular/core/testing';

import { PlatserviceService } from './platservice.service';

describe('PlatserviceService', () => {
  let service: PlatserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PlatserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
