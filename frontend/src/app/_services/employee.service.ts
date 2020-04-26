import { Injectable } from '@angular/core';
import { Employee } from '../_models/employee';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private _url : string = '../assets/json/generated.json';
  constructor(private http: HttpClient) { }
  getEmployees () : Observable <Employee[]> {
    return this.http.get<Employee[]>(this._url);
  }
}
