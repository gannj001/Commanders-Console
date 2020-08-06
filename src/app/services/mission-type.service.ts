import { Injectable } from '@angular/core';
import { MissionType } from '../models/mission-type';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { PrimaryMission } from '../models/primary-mission';

@Injectable({
  providedIn: 'root'
})
export class MissionTypeService {

  missionTypes: MissionType[]

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<MissionType[]>('/assets/mission-types.json').pipe(map(result => result)).subscribe(mt => {
      this.missionTypes = mt["missionTypes"] as MissionType[]
    });
  }

  getMissionTypes() : Observable<MissionType[]>{
    return this.httpClient.get<MissionType[]>('./assets/mission-types.json').pipe(map(result => result["missionTypes"] as MissionType[]));
  }

  getMissionTypeByName(mtn: string): Observable<MissionType> {
    return this.getMissionTypes().pipe(map(mts => mts.find(mt => mt.Name == mtn)));
    
  }
}
