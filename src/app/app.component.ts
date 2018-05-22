import { Component } from '@angular/core';
import { Title } from "@angular/platform-browser";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  providers: [Title]
})

export class AppComponent {
  constructor (private _titleService: Title) {
    this._titleService.setTitle("422 Soccer");
  }
  title = 'Soccer Dashboard';
}
