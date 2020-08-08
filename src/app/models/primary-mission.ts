import {Objective } from './objective'

export class PrimaryMission {
    Name: string;
    MissionRules?: {
        Name: string;
        Rule: string;
     };
    PrimaryObjective?: Objective;
    SecondaryObjective?: Objective;
    MissionMap?: string;
}
