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
  private _secondaryArray: Objective[] = []
  private _secondariesSelected: ReplaySubject<boolean> = new ReplaySubject<boolean>(1);
  public secondariesSelected: Observable<boolean> = this._secondariesSelected.asObservable();
  

  constructor() {
    this._secondariesSelected.next(false);
    this._secondaryMissions.next(this._secondaryArray);
   }

  addSecondaryObjective(obj: Objective) {
    if(this._secondaryArray.length < 3) {
      this._secondaryArray.push(obj)
      if(this._secondaryArray.length >= 3) {
        this._secondariesSelected.next(true);
      }
    }
    this._secondaryMissions.next(this._secondaryArray);
    
  
  }

  getPrimaryObjective(): Observable<PrimaryMission> {
    return this.primaryMission
  }

  removeSecondaryObjective(objName: string) {
    var i = this._secondaryArray.findIndex(o => o.Name === objName)
    if (i != -1) {
      this._secondaryArray.splice(i, 1);
      if(this._secondaryArray.length < 3){
        this._secondariesSelected.next(false)
      }
    }
  }

  resetSelectedMissions() {
    this.clearSecondaryObjective()
    this.setPrimaryObjective(null)
    this.setMissionType(null)
  }

  clearSecondaryObjective() {
    this._secondaryArray = []
    this._secondaryMissions.next(this._secondaryArray)
  }

  getMissionType(): Observable<MissionType> {
    return this.missionType;
  }

  getSecondaryMissions(): Observable<Array<Objective>> {
    return this.secondaryMissions;
  }

  setPrimaryObjective(pm: PrimaryMission) {
    this._primaryMission.next(pm);
  }

  setMissionType(mt: MissionType) {
    this._missionType.next(mt);
  }
}
