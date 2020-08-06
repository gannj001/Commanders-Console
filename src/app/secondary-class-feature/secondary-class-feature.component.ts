import { Component, OnInit, Input } from '@angular/core';
import { SecondaryClass } from '../models/secondary-class';
import { SecondaryMissionService } from '../services/secondary-mission.service';
import { Observable } from 'rxjs';
import { SelectedMissionService } from '../services/selected-mission.service';
import { Objective } from '../models/objective';

@Component({
  selector: 'app-secondary-class-feature',
  templateUrl: './secondary-class-feature.component.html',
  styleUrls: ['./secondary-class-feature.component.css']
})
export class SecondaryClassFeatureComponent implements OnInit {
  @Input() secondaryClass?: SecondaryClass
  @Input() secondaryObjective?: Objective
  allSecondaries: SecondaryClass[]
  chosenSecondary: Objective = null
  secondaryChosen: boolean = false;

  constructor(
    private sms: SecondaryMissionService,
    private missionManager: SelectedMissionService) { }

  ngOnInit() {
    if (this.secondaryClass) {
      this.getAllSecondaryMissions()
    } else if (this.secondaryObjective) {
      this.secondaryClass = new SecondaryClass()
      this.secondaryClass.SecondaryType = "Mission Secondary"
      this.secondaryClass.Objectives.push(this.secondaryObjective)
    }
  }
  
  getAllSecondaryMissions() {
    this.sms.getSecondaryMissions().subscribe(sm => {
      this.allSecondaries = sm["secondary-objectives"] as SecondaryClass[]
    });
  }

  updateSecondary(secondary: Objective) {
    if (secondary) {
      this.chosenSecondary = secondary
      this.secondaryChosen = true
    } else {
      this.chosenSecondary = null
      this.secondaryChosen = false
    }
  }
}
