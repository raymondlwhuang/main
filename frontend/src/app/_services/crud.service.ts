import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';
import { Crud } from '../_models/crud';

@Injectable({
  providedIn: 'root'
})
export class CrudService {
  cruds: Crud[] = [
    {id: '1', name: 'Lorem ipsum dolor sit amet',description:'Donec fringilla mattis metus, ut dictum quam venenatis ut. Aliquam non purus dictum, tempus tortor'},
    {id:'2',name:'Nam sagittis vitae ex in eleifend. Nullam vitae enim',description:'In faucibus sagittis condimentum. Etiam pulvinar ligula in lacinia ullamcorper'},
    {id:'3',name:'ante scelerisque finibus. Phasellus ac',description:'nulla sit amet, sagittis nibh. Integer interdum blandit magna'}
  ]

  constructor(private http : HttpClient,private utilsService : UtilsService) {}
  getAllCruds() : Observable<Crud[]> {
    return this.http.get<Crud[]>('/api/cruds')
          .pipe(catchError(()=>of(this.cruds)));
  }
  createCrud(payload : Crud): Observable<Crud> {
    return this.http.post<Crud>('/api/cruds',payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  deleteCrud(payload : string) : Observable<any>{
    return this.http.delete('/api/cruds/' + payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  updateCrud(payload : string | number, changes : Partial<Crud>) : Observable<any> {
    return this.http.patch('/api/cruds/' + payload, changes).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }

}
