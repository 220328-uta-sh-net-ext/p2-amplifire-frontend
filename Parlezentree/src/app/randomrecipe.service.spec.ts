import { TestBed } from '@angular/core/testing';

import { RandomrecipeService } from './randomrecipe.service';

describe('RandomrecipeService', () => {
  let service: RandomrecipeService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RandomrecipeService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
