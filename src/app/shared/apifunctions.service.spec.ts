import { TestBed } from '@angular/core/testing';

import { ApifunctionsService } from './apifunctions.service';

describe('ApifunctionsService', () => {
  let service: ApifunctionsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApifunctionsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
