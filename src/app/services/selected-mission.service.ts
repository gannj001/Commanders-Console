import { Injectable } from '@angular/core';
import { MissionType } from 'src/app/models/mission-type';
import { PrimaryMission } from 'src/app/models/primary-mission';
import { Objective } from 'src/app/models/objective';
import { Observable, BehaviorSubject, ReplaySubject } from 'rxjs';
import { CookieService } from 'ngx-cookie';

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
  

  constructor(private cs: CookieService) {
    this._secondariesSelected.next(false);
    this._secondaryMissions.next(this._secondaryArray);
    this._missionType.next();
    var all = this.cs.getAll()
    if (all){
      if (all["primaryMission"]) {
        console.log(JSON.parse(all["primaryMission"]) as PrimaryMission)
        this._primaryMission.next(JSON.parse(all["primaryMission"]) as PrimaryMission)
      }
      if (all["missionType"]){
        console.log(JSON.parse(all["missionType"]) as MissionType)
        this._missionType.next(JSON.parse(all["missionType"]) as MissionType)
      }
      if (all["secondaries"]){
        console.log(JSON.parse(all["secondaries"]) as Objective[])
        this.setSecondaries(JSON.parse(all["secondaries"]) as Objective[])
      }
      if (all["secondariesSelected"]){
        this._secondariesSelected.next(JSON.parse(all["secondariesSelected"]) as boolean)
      }
    }

    // var pm = this.cs.getObject("primaryMission");
    // console.log(pm.toString())
   }

   private setSecondaries(objArr: Objective[]) {
    this._secondaryArray = objArr
    this._secondaryMissions.next(this._secondaryArray)
    if (this._secondaryArray.length >= 3){
      this.cs.putObject("secondariesSelected", true)
      this._secondariesSelected.next(true);
    }
   }

  findSecondary(obj: Objective){
    console.log(this._secondaryArray)
    if(obj){
      if(this._secondaryArray.find(sm => sm.Name === obj.Name)){
        return true;
      }
    }
    return false;
  }

  addSecondaryObjective(obj: Objective) {
    if(this._secondaryArray.length < 3) {
      this._secondaryArray.push(obj)
      if(this._secondaryArray.length >= 3) {
        this._secondariesSelected.next(true);
        this.cs.putObject("secondariesSelected", true)
      }
    }
    this.cs.putObject("secondaries", this._secondaryArray);
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
        this.cs.putObject("secondariesSelected", false)
        this._secondariesSelected.next(false)
      }
    }
    this.cs.putObject("secondaries", this._secondaryArray);
  }

  resetSelectedMissions() {
    this.clearSecondaryObjective()
    this.setPrimaryObjective(null)
    this.setMissionType(null)
    this.cs.removeAll();
  }

  clearSecondaryObjective() {
    this._secondaryArray = []
    this._secondaryMissions.next(this._secondaryArray)
    this.cs.remove("secondaries")
  }

  getMissionType(): Observable<MissionType> {
    return this.missionType;
  }

  getSecondaryMissions(): Observable<Array<Objective>> {
    return this.secondaryMissions;
  }

  setPrimaryObjective(pm: PrimaryMission) {
    this._primaryMission.next(pm);
    this.cs.putObject("primaryMission", pm);
  }

  setMissionType(mt: MissionType) {
    this._missionType.next(mt);
    this.cs.putObject("missionType", mt);
  }
}
