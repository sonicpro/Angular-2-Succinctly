import { Injectable } from "@angular/core";
import { SEASON_SCHEDULE } from "./Schedule-data";

@Injectable()
export class SoccerService {
    public getSchedule() : any {
        return SEASON_SCHEDULE;
    }
}