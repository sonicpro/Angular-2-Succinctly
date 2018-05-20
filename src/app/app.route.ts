// Exposes the route definition array.
import { Routes } from "@angular/router"
import { AdminComponent } from "./admin/admin.component"
import { ScoringComponent } from "./scoring/scoring.component"
import { StandingsComponent } from "./standings/standings.component"
import { PageNotFoundComponent } from "./pageNotFound/pageNotFound.component"

// The path is what is displayes in the address bar;
// the component is what to instantiate and put at the router-outlet.
export const appRoutes: Routes = [
    { path: "Standings", component: StandingsComponent },
    { path: "Scoring", component: ScoringComponent },
    { path: "Admin", component: AdminComponent },
    { path: "**", component: PageNotFoundComponent }
];