import { Component, OnInit } from '@angular/core';
import { SelectedMissionService } from '../services/selected-mission.service';
import { MissionType } from '../models/mission-type';
import { PrimaryMission } from '../models/primary-mission';
import { Objective } from '../models/objective';
import { CookieService } from 'ngx-cookie';

@Component({
  selector: 'app-mission-viewer',
  templateUrl: './mission-viewer.component.html',
  styleUrls: ['./mission-viewer.component.css']
})
export class MissionViewerComponent implements OnInit {

  selectedMissionType: MissionType;
  selectedPrimaryMission: PrimaryMission;
  selectedSecondaries: Objective[]

  constructor(
    private cs: CookieService,
    private missionManager: SelectedMissionService
    ) { }

  ngOnInit() {
      
      var all = this.cs.getAll()
      if(all){
        if (all["primaryMission"]) {
          console.log(JSON.parse(all["primaryMission"]) as PrimaryMission)
          this.selectedPrimaryMission = JSON.parse(all["primaryMission"]) as PrimaryMission
        }
        if (all["missionType"]){
          console.log(JSON.parse(all["missionType"]) as MissionType)
          this.selectedMissionType = JSON.parse(all["missionType"]) as MissionType
        }
        if (all["secondaries"]){
          console.log(JSON.parse(all["secondaries"]) as Objective[])
          this.selectedSecondaries = JSON.parse(all["secondaries"]) as Objective[]
        }
      }
  }

  resetMissions() {
    this.missionManager.setPlaying(false);
    this.missionManager.resetSelectedMissions();
  }

  resetSecondaries() {
    this.missionManager.setPlaying(false);
    this.missionManager.clearSecondaryObjective();
  }


}
