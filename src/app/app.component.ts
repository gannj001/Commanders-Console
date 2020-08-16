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
  secondariesSelected: boolean;
  playing: boolean;

  constructor(private missionManager: SelectedMissionService) {
    this.missionManager.getMissionType().subscribe(mt => {
      this.missionType = mt;
    });
    this.missionManager.getPrimaryObjective().subscribe(po => {
      this.primaryObjective = po;
    });
    this.missionManager.secondariesSelected.subscribe(b => {
      this.secondariesSelected = b;
    });
    this.missionManager.getPlaying().subscribe(b => {
      this.playing = b
    });

    
  }
  setPlaying() {
    // 
    this.missionManager.setPlaying(true);
  }
}
