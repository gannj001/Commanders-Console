import { Component, OnInit } from '@angular/core';
import { MissionType } from '../models/mission-type';
import { MissionTypeService } from '../services/mission-type.service';


@Component({
  selector: 'app-mission-type',
  templateUrl: './mission-type.component.html',
  styleUrls: ['./mission-type.component.css']
})
export class MissionTypeComponent implements OnInit {

  missionTypes: MissionType[];
  selectedMissionType?: MissionType;
  
  constructor(private mts: MissionTypeService) {
    
   }

  ngOnInit() {
    this.mts.getMissionTypes().subscribe(mt => {
      this.missionTypes = mt["missionTypes"] as MissionType[]
    });
   }


  selectMissionHandler($event: any){
    this.selectedMissionType = $event
    console.log(this.selectedMissionType)
  }

}
