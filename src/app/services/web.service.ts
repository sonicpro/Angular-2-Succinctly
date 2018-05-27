/** web service provider */
// wraps Http module provided by Angular
// and provides a single async method to request
// http://ip.jsontest.com

import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/Rx";

@Injectable()
export class WebService {
    private _IPURL: string;
    
    public constructor(private _http: Http) {
        this._IPURL = "http://ip.jsontest.com";
    }

    public GetIP(): Observable<string> {
        return this._http.get(this._IPURL)
            .map(this.ExtractIP)
            .catch(this.HandleError);
    }

    private ExtractIP(res: Response): string {
        let body = res.json();
        return body.ip || "";
    }

    HandleError(error: Response | any) {
        let errMsg: string;
        if (error instanceof Response) {
            const body = error.json() || "";
            const err = body.error || JSON.stringify(body);
            errMsg = `${error.status} - ${error.statusText || ""} ${err}`;
        } else {
            errMsg = error.message ? error.message : error.toString();
        }
        return Observable.throw(errMsg);
    }
}