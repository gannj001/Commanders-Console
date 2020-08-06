import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges
} from '@angular/core';

import { Objective } from '../models/objective';
import { SelectedMissionService } from '../services/selected-mission.service';

@Component({
  selector: 'app-secondary-feature',
  templateUrl: './secondary-feature.component.html',
  styleUrls: ['./secondary-feature.component.css']
})

//TODO: Add event handler to update parent object when a mission of this type has been selected and disable all children


export class SecondaryFeatureComponent implements OnInit, OnChanges {
  @Input() secondaryMission: Objective
  @Input() secondaryChosen: boolean
  @Output() secondarySelected: EventEmitter<Objective> = new EventEmitter<Objective>();
  disabled?: boolean;
  selected: boolean;

  constructor(
    private missionManager: SelectedMissionService
  ) { }

  ngOnInit() {
    this.missionManager.secondaryMissions.subscribe(sm => {
      if (sm.length >= 3){
        this.disabled = true;
      }
    });
    
    this.disabled = this.secondaryChosen
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.selected) {
      this.disabled = changes.secondaryChosen.currentValue
    }
  }

  selectSecondary(){
    this.secondarySelected.emit(this.secondaryMission);
    this.missionManager.addSecondaryObjective(this.secondaryMission);
    this.selected = true;
  }

  unselectSecondary(){
    this.secondarySelected.emit(null);
    this.missionManager.removeSecondaryObjective(this.secondaryMission.Name)
    this.selected = false;
  }
  
  

}
