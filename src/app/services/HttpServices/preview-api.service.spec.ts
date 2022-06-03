import { TestBed } from '@angular/core/testing';

import { PreviewApiService } from './preview-api.service';

describe('PreviewApiService', () => {
  let service: PreviewApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PreviewApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
