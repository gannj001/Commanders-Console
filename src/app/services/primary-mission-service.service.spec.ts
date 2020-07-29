import { TestBed } from '@angular/core/testing';

import { PrimaryMissionServiceService } from './primary-mission-service.service';

describe('PrimaryMissionServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PrimaryMissionServiceService = TestBed.get(PrimaryMissionServiceService);
    expect(service).toBeTruthy();
  });
});
