import { Component, OnInit } from '@angular/core';
import { MissionType } from '../models/mission-type';
import { MissionTypeService } from '../services/mission-type.service';
import { SecondaryClass } from '../models/secondary-class';
import { SecondaryMissionService } from '../services/secondary-mission.service';
import { SelectedMissionService } from '../services/selected-mission.service';


@Component({
  selector: 'app-mission-type',
  templateUrl: './mission-type.component.html',
  styleUrls: ['./mission-type.component.css']
})
export class MissionTypeComponent implements OnInit {

  missionTypes: MissionType[] = [];
  missionType: MissionType;
  
  constructor(private mts: MissionTypeService,
    private missionManager: SelectedMissionService) {
    
   }

  ngOnInit() {
    this.mts.getMissionTypes().subscribe(mts => {
      this.missionTypes = mts as MissionType[]
    });
    this.missionManager.getMissionType().subscribe(mt => {
      this.missionType = mt as MissionType
    });
  }

  setMissionType(mt: MissionType){
    this.missionManager.setMissionType(mt)
  }

  selectMissionHandler($event: MissionType){
    this.missionManager.setMissionType($event)
  }

  cancelMissionType() {
    this.missionManager.setMissionType(null);
    this.missionManager.setPrimaryObjective(null);
  }
}
