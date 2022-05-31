import { TestBed } from '@angular/core/testing';

import { SearchbyingredientsService } from './searchbyingredients.service';

describe('SearchbyingredientsService', () => {
  let service: SearchbyingredientsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SearchbyingredientsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
