import { TestBed, inject } from '@angular/core/testing';

import { DtService } from './dt.service';

describe('DtService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DtService]
    });
  });

  it('should be created', inject([DtService], (service: DtService) => {
    expect(service).toBeTruthy();
  }));
});
