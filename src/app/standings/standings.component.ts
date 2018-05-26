/** Standings component */

import { Component, ViewEncapsulation } from "@angular/core";
import { SoccerService } from "../services/soccer.service";
import { iRanking } from "../interfaces/iRanking";
import { iSchedule } from "../interfaces/iSchedule";
import { BrowserDynamicTestingModule } from "@angular/platform-browser-dynamic/testing";

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
  public Standings: iRanking[];

  public constructor (private _soccerService: SoccerService) {
    this.getSchedule();
    this.ComputeRanking();
  }
  private getSchedule() {
    this.Schedule = this._soccerService.getSchedule();
  }
  public ComputeRanking(){
    let currDate: Date = new Date();
    let teamIdx: number;
    this.Standings = []; // Empty the array.
    this.Schedule.forEach(game => {
      if (game.PlayingDate < currDate && game.HomeScore >= 0) { // HomeScore of -1 means the game has not finished yet.
        const teams = this.Standings.map(s => s.TeamName);
        teamIdx = teams.indexOf(game.HomeTeam);
        if (teamIdx < 0) {
          this.Standings.push({
            TeamName: game.HomeTeam,
            GamesPlayed: 0,
            Wins: 0,
            Ties: 0,
            GoalsFor: 0,
            GoalsAgainst: 0
          })
          teamIdx = this.Standings.length - 1;
        }
        this.UpdateStandingRow(teamIdx, game, true);
        teamIdx = teams.indexOf(game.AwayTeam);
        if (teamIdx < 0) {
          this.Standings.push({
            TeamName: game.AwayTeam,
            GamesPlayed: 0,
            Wins: 0,
            Ties: 0,
            GoalsFor: 0,
            GoalsAgainst: 0
          })
          teamIdx = this.Standings.length - 1;
        }
        this.UpdateStandingRow(teamIdx, game, false);
      }
    });
    // Sorting in descending order, so the top teams go first.
    this.Standings.sort((first, second): number => {
      const firstPoints = first.Wins * 3 + first.Ties;
      const secondPoints = second.Wins * 3 + second.Ties;
      if (firstPoints > secondPoints) {
        return -1;
      } else if (firstPoints < secondPoints) {
        return 1;
      } else {
        if (first.GoalsFor > second.GoalsFor) {
          return -1;
        } else if (first.GoalsFor < second.GoalsFor) {
          return 1;
        } else {
          return 0;
        }
      }
    })
  }
  private UpdateStandingRow(teamIdx: number, game: iSchedule, isHome: Boolean) {
    const row: iRanking = this.Standings[teamIdx];
    let ourGoals: number, theirGoals: number;
    if (isHome) {
      ourGoals = game.HomeScore;
      theirGoals = game.AwayScore;
    } else {
      ourGoals = game.AwayScore;
      theirGoals = game.HomeScore;
    }
    if (ourGoals > theirGoals) {
      row.Wins++;
    } else if (ourGoals  == theirGoals) {
      row.Ties++;
    }
    row.GoalsFor += ourGoals;
    row.GoalsAgainst += theirGoals;
    row.GamesPlayed++;
  }
}