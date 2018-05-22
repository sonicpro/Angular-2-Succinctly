/*
  Standings component
*/

import { Component, ViewEncapsulation } from "@angular/core"
import { SoccerService } from "../services/SoccerService"

@Component({
    encapsulation: ViewEncapsulation.Native, // Use Shadow DOM
    template: "<h3>Standings</h3>",
    providers: [SoccerService]
})

export class StandingsComponent {
  constructor (private _soccerService: SoccerService) {
    this._soccerService.getSchedule();
  }
}