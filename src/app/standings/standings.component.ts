/*
  Standings component
*/

import { Component, ViewEncapsulation } from "@angular/core";
import { SoccerService } from "../services/soccer.service";
import { iRanking } from "../interfaces/iRanking";
import { iSchedule } from "../interfaces/iSchedule";

@Component({
    encapsulation: ViewEncapsulation.Native, // Use Shadow DOM
    templateUrl: "./standings.component.html",
    providers: [SoccerService],
    styles: [`
      h3 {
        text-align: center;
        color: navy;
        font-size: x-large;
        marging: 0px;
      }
      table {
        width: 92%;
        margin: 1em auto;
        font-size: large;
        font-family: "Comic Sans MS", cursive, sans-serif;
      }
      th {
        text-decoration: underline;
      }
    `]
})

export class StandingsComponent {
  public LeagueName: string;
  public Schedule: iSchedule[];
  public Standings: iRanking[] = [ {
    TeamName: "Kellie Kickers",
    GamesPlayed: 12,
    Wins: 10,
    Ties: 1,
    GoalsFor: 42,
    GoalsAgainst: 9
  }];

  public constructor (private _soccerService: SoccerService) {
    this.getSchedule();
    this.ComputeRanking();
  }
  private getSchedule() {
    let promise = this._soccerService.getSchedule();
    promise.then((resolvedWith: iSchedule[]) => this.Schedule = resolvedWith);
  }
  public ComputeRanking(){ }
}