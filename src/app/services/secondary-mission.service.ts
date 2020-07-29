import { Injectable, Input } from '@angular/core';
import { MissionType } from '../models/mission-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecondaryMission } from '../models/secondary-mission';

@Injectable({
  providedIn: 'root'
})
export class SecondaryMissionService {
  
  SecondaryMissions: SecondaryMission[]
  SecondaryMission: SecondaryMission

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<SecondaryMission[]>('./assets/secondary-missions.json').pipe(map(result => result)).subscribe(pm => {
      this.SecondaryMissions = pm["secondary-missions"] as SecondaryMission[]
    });
  }

  getSecondaryMissions(): Observable<SecondaryMission[]> {
    return this.httpClient.get<SecondaryMission[]>('./assets/secondary-missions.json').pipe(map(result => result));
  }

  getSecondaryMissionByName(pmn: string): SecondaryMission {
    this.getSecondaryMissions().pipe<SecondaryMission>(map(missions => missions.find(mission => mission.Name == pmn))).subscribe(pm => this.SecondaryMission = pm);
    return this.SecondaryMission;
  }

}
