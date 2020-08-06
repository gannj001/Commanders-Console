import { Injectable } from '@angular/core';
import { MissionType } from 'src/app/models/mission-type';
import { PrimaryMission } from 'src/app/models/primary-mission';
import { Objective } from 'src/app/models/objective';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SelectedMissionService {
  private _missionType:  ReplaySubject<MissionType> = new ReplaySubject<MissionType>(1);
  public missionType: Observable<MissionType> = this._missionType.asObservable();
  private _primaryMission: ReplaySubject<PrimaryMission> = new ReplaySubject<PrimaryMission>(1);
  public primaryMission: Observable<PrimaryMission> = this._primaryMission.asObservable();
  private _secondaryMissions: ReplaySubject<Objective[]> = new ReplaySubject<Objective[]>(1);
  public secondaryMissions: Observable<Objective[]> = this._secondaryMissions.asObservable();
  

  constructor() { }

  addSecondaryObjective(obj: Objective): boolean {
    var out: boolean;
    this.secondaryMissions.subscribe(sm => {
      if (sm.length >= 3){
        out = false;
      } else {
        sm.push(obj);
        this._secondaryMissions.next(sm);
        out = true;
      }
    });
  
    return out
  }

  getPrimaryObjective(): Observable<PrimaryMission> {
    return this.primaryMission
  }

  removeSecondaryObjective(objName: string) {
    this.secondaryMissions.subscribe(sm =>{
      var i = sm.findIndex(obj => obj.Name === objName);
      sm.splice(i, 1);
      this._secondaryMissions.next(sm);
    });
  }

  resetSelectedMissions() {
    this.clearSecondaryObjective()
    this.setPrimaryObjective(null)
    this.setMissionType(null)
  }

  clearSecondaryObjective() {
    this._secondaryMissions = new ReplaySubject<Objective[]>()
  }

  getMissionType(): Observable<MissionType> {
    return this.missionType
  }

  setPrimaryObjective(pm: PrimaryMission) {
    this._primaryMission.next(pm);
  }

  setMissionType(mt: MissionType) {
    this._missionType.next(mt);
  }
}
