import { Component, OnInit, Input, OnDestroy, OnChanges, SimpleChanges } from '@angular/core';
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
export class SecondaryClassFeatureComponent implements OnInit, OnChanges {
  @Input() secondaryClass?: SecondaryClass
  @Input() secondaryObjective?: Objective
  allSecondaries: SecondaryClass[]
  chosenSecondary: Objective = null
  secondaryChosen: boolean = false;
  disabled: boolean = false;
  colWidth: number;
  colWidthClass: string

  constructor(
    private sms: SecondaryMissionService,
    private missionManager: SelectedMissionService) { }

  ngOnChanges(changes: SimpleChanges){
    this.missionManager.secondariesSelected.subscribe(b => {
      if(b && !this.secondaryChosen) {
        this.disabled = true
      } else {
        this.disabled = false
      }
    })
  }
  

  ngOnInit() {
    if (this.secondaryObjective) {
      this.secondaryClass = new SecondaryClass()
      this.secondaryClass.SecondaryType = "Mission Secondary"
      this.secondaryClass.Objectives.push(this.secondaryObjective)
    }
    this.colWidth = 12/this.secondaryClass.Objectives.length
    this.colWidthClass = "col-sm-" + this.colWidth
    console.log(this.colWidthClass)
    this.disabled = false
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
