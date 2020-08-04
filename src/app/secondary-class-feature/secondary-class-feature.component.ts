import { Component, OnInit, Input } from '@angular/core';
import { SecondaryClass } from '../models/secondary-class';
import { SecondaryMissionService } from '../services/secondary-mission.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-secondary-class-feature',
  templateUrl: './secondary-class-feature.component.html',
  styleUrls: ['./secondary-class-feature.component.css']
})
export class SecondaryClassFeatureComponent implements OnInit {
  @Input() secondaryClass?: SecondaryClass
  allSecondaries: SecondaryClass[]

  constructor(private sms: SecondaryMissionService) { }

  ngOnInit() {
    this.getAllSecondaryMissions()
    
  }
  
  getAllSecondaryMissions() {
    this.sms.getSecondaryMissions().subscribe(sm => {
      this.allSecondaries = sm["secondary-objectives"] as SecondaryClass[]
    });
  }
}
