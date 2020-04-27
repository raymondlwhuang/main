import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Demo } from '../_models/demo';
import { environment } from 'src/environments/environment';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private _url : string = environment.helpUrl + '/json/demos.json';
  private _helpUrl : string = environment.helpUrl + '/help/';
  constructor(private http: HttpClient) { }
  getDemos () : Observable <Demo[]> {
    return this.http.get<Demo[]>(this._url);
  }
  getHelpFile (helpPath : string) : Observable <any> {
    let url = this._helpUrl + helpPath;
    return this.http.get(url, { responseType: 'text' as 'json'});
  }
  errorHandler(error: HttpErrorResponse) {
    return Observable.throw(error.message || "server error.");
  }

}
