import { TestBed } from '@angular/core/testing';

import { SMovies } from './smovies';

describe('SMovies', () => {
  let service: SMovies;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SMovies);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
