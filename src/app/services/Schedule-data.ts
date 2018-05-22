/**
 * A rather strange using of iSchedule interface as a type
 */
import { iSchedule } from "../interfaces/iSchedule";
 
export 
  const SEASON_SCHEDULE: iSchedule[] = [
    {id:1,PlayingDate:new Date(2015,8,23),HomeTeam:'Old Men United',AwayTeam:'Kellie Kickers',
          HomeScore:4,AwayScore:3,RefName:'Joanne',notes:'Overtime game'},
    {id:2,PlayingDate:new Date(2015,8,26),HomeTeam:'Torn Achilles',AwayTeam:'422 Nomads',
          HomeScore:7,AwayScore:2,RefName:'Colin',notes:''},
    {id:3,PlayingDate:new Date(2015,8,28),HomeTeam:'Blue Devils',AwayTeam:'FC Dauntlesss',
          HomeScore:4,AwayScore:6,RefName:'Gene',notes:''},
    {id:4,PlayingDate:new Date(2015,9,1),HomeTeam:'Kellie Kickers',AwayTeam:'Blue Devils',
          HomeScore:8,AwayScore:2,RefName:'Joanne',notes:''},
    {id:5,PlayingDate:new Date(2015,9,82),HomeTeam:'Torn Achilles',AwayTeam:'Old Men United',
          HomeScore:3,AwayScore:6,RefName:'Colin',notes:''},
    {id:6,PlayingDate:new Date(2015,9,12),HomeTeam:'422 Nomads',AwayTeam:'FC Dauntlesss',
          HomeScore:2,AwayScore:6,RefName:'Gene',notes:''},
    {id:7,PlayingDate:new Date(2015,9,1),HomeTeam:'Old Men United',AwayTeam:'Blue Devils',
          HomeScore:8,AwayScore:7,RefName:'Joanne',notes:''},
    {id:8,PlayingDate:new Date(2015,9,82),HomeTeam:'Torn Achilles',AwayTeam:'422 Nomads',
          HomeScore:4,AwayScore:4,RefName:'Colin',notes:''},
    {id:9,PlayingDate:new Date(2015,9,12),HomeTeam:'Kellie Kickers',AwayTeam:'FC Dauntlesss',
          HomeScore:5,AwayScore:1,RefName:'Gene',notes:''}
          
   ]