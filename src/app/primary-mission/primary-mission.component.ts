import { Component, OnInit, Input, OnChanges, SimpleChanges, Output } from '@angular/core';
import { PrimaryMissionService } from '../services/primary-mission-service.service';
import { PrimaryMission } from '../models/primary-mission';
import { SelectedMissionService } from '../services/selected-mission.service';
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
  selectedMissionType?: MissionType;
  indexes: Array<Number>

  constructor(
    private pms: PrimaryMissionService,
    private missionManager: SelectedMissionService
    ) { }

  ngOnInit() {
    this.pms.getPrimaryMissions().subscribe(pm => {
      this.allPrimaryMissions = pm as PrimaryMission[]
      this.missionManager.getMissionType().subscribe(mt => {
        this.selectedMissionType = mt;
        if (this.selectedMissionType != null) {
        this.selectedMissionType.Missions.forEach(mission => {
          this.validPrimaryMissions.push(
            this.allPrimaryMissions.find(m => m.Name == mission) as PrimaryMission
          )
        });
      } // end if
      
      this.indexes = new Array(this.validPrimaryMissions.length/3).fill(0)
      });
    });

    this.missionManager.getPrimaryObjective().subscribe(po => {
      this.selectedPrimaryMission = po
    })
    
  }


  setPrimaryMission(pm: PrimaryMission)
  {
    this.missionManager.setPrimaryObjective(pm)
  }

  cancelPrimaryMission() {
    this.missionManager.setPrimaryObjective(null)
    this.missionManager.clearSecondaryObjective()
  }

}
