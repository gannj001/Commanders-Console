import { Injectable, Input } from '@angular/core';
import { MissionType } from '../models/mission-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrimaryMission } from '../models/primary-mission';

@Injectable({
  providedIn: 'root'
})
export class PrimaryMissionService {
  
  primaryMissions: PrimaryMission[]
  primaryMission: PrimaryMission

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<PrimaryMission[]>('./assets/primary-missions.json').pipe(map(result => result)).subscribe(pm => {
      this.primaryMissions = pm["primary-missions"] as PrimaryMission[]
    });
  }

  getPrimaryMissions(): Observable<PrimaryMission[]> {
    return this.httpClient.get<PrimaryMission[]>('./assets/primary-missions.json').pipe(map(result => result["primary-missions"] as PrimaryMission[]));
  }

  getPrimaryMissionByName(pmn: string): Observable<PrimaryMission> {
    
    return this.getPrimaryMissions().pipe<PrimaryMission>(map(missions => missions.find(mission => mission.Name == pmn)))
  }
}
