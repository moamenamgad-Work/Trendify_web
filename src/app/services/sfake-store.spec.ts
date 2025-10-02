import { TestBed } from '@angular/core/testing';

import { SFakeStore } from './sfake-store';

describe('SFakeStore', () => {
  let service: SFakeStore;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SFakeStore);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
