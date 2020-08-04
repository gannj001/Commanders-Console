import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { PrimaryMissionService } from '../services/primary-mission-service.service';
import { PrimaryMission } from '../models/primary-mission';
import { SecondaryMissionService } from '../services/secondary-mission.service';
import { SecondaryClass } from '../models/secondary-class';
import { SelectedMissionService } from '../services/selected-mission.service';
import { PipeDefWithMeta } from '@angular/core/src/render3';
import { MissionType } from '../models/mission-type';

@Component({
  selector: 'app-primary-mission',
  templateUrl: './primary-mission.component.html',
  styleUrls: ['./primary-mission.component.css'],
  providers: [
  ]
})

export class PrimaryMissionComponent implements OnInit {
  allPrimaryMissions: PrimaryMission[];
  selectedPrimaryMission?: PrimaryMission;
  validPrimaryMissions: PrimaryMission[] = [];
  selectedMissionType: MissionType;

  constructor(
    private pms: PrimaryMissionService,
    private sms: SecondaryMissionService,
    private missionManager: SelectedMissionService
    ) { }

  ngOnInit() {
    this.pms.getPrimaryMissions().subscribe(pm => {
      this.allPrimaryMissions = pm as PrimaryMission[]
      this.missionManager.getMissionType().subscribe(mt => {
        this.selectedMissionType = mt;
        mt.Missions.forEach(mission => {
          this.validPrimaryMissions.push(
            this.allPrimaryMissions.find(m => m.Name == mission) as PrimaryMission
          )
        });
      });
    });
    
  }


  setPrimaryMission(pm: PrimaryMission)
  {
    this.missionManager.setPrimaryObjective(pm)
  }

  getAllMissions() {
    
    console.log(this.allPrimaryMissions)
  }

  cancelPrimaryMission() {
    this.missionManager.setPrimaryObjective(null)
  }

}
