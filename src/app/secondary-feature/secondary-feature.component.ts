import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnDestroy
} from '@angular/core';

import { Objective } from '../models/objective';
import { SelectedMissionService } from '../services/selected-mission.service';

@Component({
  selector: 'app-secondary-feature',
  templateUrl: './secondary-feature.component.html',
  styleUrls: ['./secondary-feature.component.css']
})

//TODO: Add event handler to update parent object when a mission of this type has been selected and disable all children


export class SecondaryFeatureComponent implements OnInit, OnChanges, OnDestroy {
  @Input() secondaryMission: Objective
  @Input() secondaryChosen: boolean
  @Output() secondarySelected: EventEmitter<Objective> = new EventEmitter<Objective>();
  disabled?: boolean;
  selected: boolean;
  secondariesSelected: boolean;

  constructor(
    private missionManager: SelectedMissionService
  ) { }
  ngOnDestroy() {
  }

  ngOnInit() {
    this.missionManager.secondariesSelected.subscribe(b => {
      if (!this.selected){
        this.disabled = b;
      }
    });
    
    this.disabled = this.secondaryChosen
    
  }

  ngOnChanges(changes: SimpleChanges) {
    if(!this.selected) {
      this.disabled = changes.secondaryChosen.currentValue
    }
  }

  addSecondary(){
    this.secondarySelected.emit(this.secondaryMission);
    
    console.log("setting secondary " + this.secondaryMission.Name)
    this.missionManager.addSecondaryObjective(this.secondaryMission);
    this.selected = true;
    this.disabled = false;
  }

  unselectSecondary(){
    this.secondarySelected.emit(null);
    this.missionManager.removeSecondaryObjective(this.secondaryMission.Name)
    this.selected = false;
    this.disabled = false;
  }
  
  

}
