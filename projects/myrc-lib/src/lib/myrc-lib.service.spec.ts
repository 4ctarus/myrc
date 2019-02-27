import { TestBed } from '@angular/core/testing';

import { MyrcLibService } from './myrc-lib.service';

describe('MyrcLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MyrcLibService = TestBed.get(MyrcLibService);
    expect(service).toBeTruthy();
  });
});
