import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Demo } from '../_models/demo';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DemoService {
  private _helpUrl : string = environment.helpUrl + '/help/';

  constructor(private http : HttpClient) {}
  getHelpFile (helpPath : string) : Observable <any> {
    let url = this._helpUrl + helpPath;
    return this.http.get(url, { responseType: 'text' as 'json'});
  }

  getAllDemos() : Observable<Demo[]> {
    return this.http.get<Demo[]>('/api/demos');
  }
  createDemo(payload : Demo): Observable<Demo> {
    return this.http.post<Demo>('/api/demos',payload).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  deleteDemo(payload : string) : Observable<any>{
    return this.http.delete('/api/demos/' + payload).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  updateDemo(payload : string | number, changes : Partial<Demo>) : Observable<any> {
    return this.http.patch('/api/demos/' + payload, changes).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      errorMessage = `Error: ${error.error.message}`;
    } else {
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    return throwError(errorMessage);
  }  
}
