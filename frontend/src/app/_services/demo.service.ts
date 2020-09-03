import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Demo } from '../_models/demo';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
   //use this as a initial state due to not yet working on PHP back end and mongoDB is not connected
  private _url : string = environment.helpUrl + '/json/demos.json';
  private _helpUrl : string = environment.helpUrl + '/help/';

  constructor(private http : HttpClient,private utilsService : UtilsService) {}
  getHelpFile (helpPath : string) : Observable <any> {
    let url = this._helpUrl + helpPath;
    return this.http.get(url, { responseType: 'text' as 'json'});
  }

  getAllDemos() : Observable<Demo[]> {
    return (this.http.get<Demo[]>('/api/demos'))
    .pipe(
      catchError(() => this.http.get<Demo[]>(this._url))
    )
    .pipe(catchError((error)=>this.utilsService.handleError(error)));
  }
  createDemo(payload : Demo): Observable<Demo> {
    return this.http.post<Demo>('/api/demos',payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  deleteDemo(payload : string) : Observable<any>{
    return this.http.delete('/api/demos/' + payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  updateDemo(payload : string | number, changes : Partial<Demo>) : Observable<any> {
    return this.http.patch('/api/demos/' + payload, changes).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }

}
