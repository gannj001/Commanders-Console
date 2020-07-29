import { TestBed } from '@angular/core/testing';

import { MissionTypeService } from './mission-type.service';

describe('MissionTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MissionTypeService = TestBed.get(MissionTypeService);
    expect(service).toBeTruthy();
  });
});
