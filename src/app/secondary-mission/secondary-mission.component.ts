import { Component, OnInit } from '@angular/core';
import { SelectedMissionService } from '../services/selected-mission.service';
import { SecondaryMissionService } from '../services/secondary-mission.service';
import { SecondaryClass } from '../models/secondary-class';
import { PrimaryMission } from '../models/primary-mission';

@Component({
  selector: 'app-secondary-mission',
  templateUrl: './secondary-mission.component.html',
  styleUrls: ['./secondary-mission.component.css']
})
export class SecondaryMissionComponent implements OnInit {

  constructor(
    private missionManager: SelectedMissionService,
    private sms: SecondaryMissionService) {}
    secondaryClasses: SecondaryClass[];
    primaryMission: PrimaryMission

  ngOnInit() {
    this.sms.getSecondaryMissions().subscribe(sm => {
      this.secondaryClasses = sm["secondary-objectives"] as SecondaryClass[]
    })
    this.missionManager.getPrimaryObjective().subscribe(po => {
      this.primaryMission = po
    })
  }

}
