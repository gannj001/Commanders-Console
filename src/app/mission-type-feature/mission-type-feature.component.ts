import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { MissionType } from '../models/mission-type';

@Component({
  selector: 'app-mission-type-feature',
  templateUrl: './mission-type-feature.component.html',
  styleUrls: ['./mission-type-feature.component.css']
})


export class MissionTypeFeatureComponent implements OnInit {
  @Input() missionType: MissionType
  @Output() selectEvent = new EventEmitter<MissionType>();
  constructor() { }

  ngOnInit() {
  }

  setMissionType(){
    this.selectEvent.emit(this.missionType);
    console.log(this.missionType.Name)
  }

}
