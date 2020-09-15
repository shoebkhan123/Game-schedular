import { TestBed } from '@angular/core/testing';

import { GameScheduleService } from './game-schedule.service';

describe('GameScheduleService', () => {
  let service: GameScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GameScheduleService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
