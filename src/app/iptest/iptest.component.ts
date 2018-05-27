/** IPtest component */

import { Component, ViewEncapsulation } from "@angular/core"
import { WebService } from "../services/web.service";

@Component({
    encapsulation: ViewEncapsulation.Native, // Use Shadow DOM
    templateUrl: "./iptest.component.html",
    providers: [WebService],
    styles: [`h3 {
      text-align: center;
      color: navy;
      margin: 0px;
      font-size: x-large;
      font-weight: bold;
    }`]
})

export class IPtestComponent {
  public IPAddr: string;
  public ErrMsg: string = "";

  constructor (private _web: WebService) {
    _web.GetIP().subscribe(ipAddr => this.IPAddr = ipAddr,
      err => this.ErrMsg = err);
  }
}