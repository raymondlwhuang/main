import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Course } from '../_models/course';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  constructor(private http : HttpClient) {}
  getTest(){
    return this.http.get<Course[]>('/api/courses');
  }
  getAllCourses() : Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses');
  }
  createCourse(payload : Course): Observable<Course> {
    return this.http.post<Course>('/api/courses',payload).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  deleteCourse(payload : string) : Observable<any>{
    return this.http.delete('/api/courses/' + payload).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  updateCourse(payload : string | number, changes : Partial<Course>) : Observable<any> {
    return this.http.patch('/api/courses/' + payload, changes).pipe(
      retry(1),
      catchError((error)=>this.handleError(error))      
    );
  }
  handleError(error) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    //return throwError(errorMessage); //will return error after backend is done
    return throwError('Backend development comming soon');
  }  
}
