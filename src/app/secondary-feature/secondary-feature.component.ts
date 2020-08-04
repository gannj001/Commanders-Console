import { Component, OnInit, Input } from '@angular/core';
import { Objective } from '../models/objective';

@Component({
  selector: 'app-secondary-feature',
  templateUrl: './secondary-feature.component.html',
  styleUrls: ['./secondary-feature.component.css']
})
export class SecondaryFeatureComponent implements OnInit {
  @Input() secondaryMission: Objective
  constructor() { }

  ngOnInit() {
  }

}
