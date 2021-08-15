import { TestBed } from '@angular/core/testing';

import { HelperService } from './helper.service';

describe('HelperService', () => {
  let service: HelperService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HelperService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should return new value form the getModifiedSumNumber', () => {
    let result=service.getModifiedSumNumber(10)
    expect(result).toBe('SUM-10')
  });
});
