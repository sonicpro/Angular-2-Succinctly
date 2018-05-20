import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router"

import { appRoutes } from "./app.route" // Our app route definitions
import { AppComponent } from './app.component';
import { StandingsComponent } from "./standings/standings.component"
import { ScoringComponent } from "./scoring/scoring.component"
import { AdminComponent } from "./admin/admin.component"
import { PageNotFoundComponent } from './pageNotFound/pageNotFound.component';

@NgModule({
  declarations: [
    AppComponent,
    StandingsComponent,
    ScoringComponent,
    AdminComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
