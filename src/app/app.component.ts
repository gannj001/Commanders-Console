import { Component } from '@angular/core';
import { SelectedMissionService } from './services/selected-mission.service';
import { MissionType } from './models/mission-type';
import { PrimaryMission } from './models/primary-mission';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent {
  title = 'Commanders Console';
  missionType: MissionType;
  primaryObjective: PrimaryMission;


  constructor(private missionManager: SelectedMissionService) {
    this.missionManager.getMissionType().subscribe(mt => {
      this.missionType = mt
    });
    this.missionManager.getPrimaryObjective().subscribe(po => {
      this.primaryObjective = po
    });
  }
}
