// Import from Angular 2 modules
import { Component, ViewEncapsulation } from "@angular/core"

// Component metadata. Do not need to define "selector" property
// as long as we are going to use this component as part of a route definition.
@Component({
    encapsulation: ViewEncapsulation.Native, // Shadow DOM
    template: "<h3>Page not found</h3>"
})

export class PageNotFoundComponent {}