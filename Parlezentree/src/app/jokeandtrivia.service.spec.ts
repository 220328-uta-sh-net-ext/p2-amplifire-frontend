import { TestBed } from '@angular/core/testing';

import { JokeandtriviaService } from './jokeandtrivia.service';

describe('JokeandtriviaService', () => {
  let service: JokeandtriviaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(JokeandtriviaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
