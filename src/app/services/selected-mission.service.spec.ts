import { TestBed } from '@angular/core/testing';

import { SelectedMissionService } from './selected-mission.service';

describe('SelectedMissionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SelectedMissionService = TestBed.get(SelectedMissionService);
    expect(service).toBeTruthy();
  });
});
