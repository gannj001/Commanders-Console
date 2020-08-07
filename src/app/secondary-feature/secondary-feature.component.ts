import { 
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  SimpleChanges,
  OnChanges,
  OnDestroy,
  HostBinding
} from '@angular/core';

import { Objective } from '../models/objective';
import { SelectedMissionService } from '../services/selected-mission.service';

@Component({
  selector: 'app-secondary-feature',
  templateUrl: './secondary-feature.component.html',
  styleUrls: ['./secondary-feature.component.css']
})

export class SecondaryFeatureComponent implements OnInit, OnChanges {
  @Input() secondaryMission: Objective
  @Input() secondaryChosen: boolean
  @Output() secondarySelected: EventEmitter<Objective> = new EventEmitter<Objective>();

  disabled?: boolean
  selected: boolean
  secondariesSelected: boolean;

  @HostBinding('class.card') card = true;
  @HostBinding('class.d-none') dnone =  this.disabled;
  @HostBinding('class.w-100') fullWidth = this.selected;

  constructor(
    private missionManager: SelectedMissionService
  ) { }
  

  ngOnInit() {
    this.disabled = false;
    this.selected = false;
    
    
  }



  ngOnChanges(changes: SimpleChanges) {
    if(!this.selected) {
      this.disabled = changes.secondaryChosen.currentValue
      this.dnone = this.disabled
    }
  }

  addSecondary(){
    this.secondarySelected.emit(this.secondaryMission);
    
    this.missionManager.addSecondaryObjective(this.secondaryMission);
    this.selected = true;
    this.fullWidth = this.selected;
    this.disabled = false;
  }

  unselectSecondary(){
    this.secondarySelected.emit(null);
    this.missionManager.removeSecondaryObjective(this.secondaryMission.Name)
    this.selected = false;
    this.fullWidth = this.selected;
  }
  
  

}
