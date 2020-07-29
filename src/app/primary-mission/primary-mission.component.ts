import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { PrimaryMissionService } from '../services/primary-mission-service.service';
import { PrimaryMission } from '../models/primary-mission';
import { MissionType } from '../models/mission-type';

@Component({
  selector: 'app-primary-mission',
  templateUrl: './primary-mission.component.html',
  styleUrls: ['./primary-mission.component.css'],
  providers: [
  ]
})

export class PrimaryMissionComponent implements OnInit {
  @Input() selectedMissionType: MissionType;
  allPrimaryMissions: PrimaryMission[];
  selectedPrimaryMission?: PrimaryMission;

  constructor(
    private pms: PrimaryMissionService,
    ) { }

  ngOnInit() {
    this.getAllMissions();
  }

  setPrimaryMission(pmn: string)
  {
    this.selectedPrimaryMission = this.allPrimaryMissions.find(pm => pm.Name === pmn);
  }

  getAllMissions() {
    this.pms.getPrimaryMissions().subscribe(pm => {
      this.allPrimaryMissions = pm["primary-missions"] as PrimaryMission[]
    });
  }

}
