import { TestBed } from '@angular/core/testing';

import { SecondaryMissionService } from './secondary-mission.service';

describe('SecondaryMissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SecondaryMissionService = TestBed.get(SecondaryMissionService);
    expect(service).toBeTruthy();
  });
});
