import { TestBed } from '@angular/core/testing';

import { AlertDataBaseService } from './alert-data-base.service';

describe('AlertDataBaseService', () => {
  let service: AlertDataBaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AlertDataBaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
