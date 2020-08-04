import { Injectable, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SecondaryClass } from '../models/secondary-class';

@Injectable({
  providedIn: 'root'
})
export class SecondaryMissionService {
  
  SecondaryMissions: SecondaryClass[]
  SecondaryMission: SecondaryClass

  constructor(private httpClient: HttpClient) {
    this.httpClient.get<SecondaryClass[]>('./assets/secondary-missions.json').pipe(map(result => result)).subscribe(pm => {
      this.SecondaryMissions = pm["secondary-objectives"] as SecondaryClass[]
    });
  }

  getSecondaryMissions(): Observable<SecondaryClass[]> {
    return this.httpClient.get<SecondaryClass[]>('./assets/secondary-missions.json').pipe(map(result => result));
  }
}
