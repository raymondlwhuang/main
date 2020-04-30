import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of, throwError } from 'rxjs';
import { Course } from '../_models/course';
import { retry, catchError } from 'rxjs/operators';
import { UtilsService } from './utils.service';

@Injectable({
  providedIn: 'root'
})
export class CourseService {
  courses: Course[] = [
    {id: '1', name: 'Lorem ipsum dolor sit amet',description:'Donec fringilla mattis metus, ut dictum quam venenatis ut. Aliquam non purus dictum, tempus tortor'},
    {id:'2',name:'Nam sagittis vitae ex in eleifend. Nullam vitae enim',description:'In faucibus sagittis condimentum. Etiam pulvinar ligula in lacinia ullamcorper'},
    {id:'3',name:'ante scelerisque finibus. Phasellus ac',description:'nulla sit amet, sagittis nibh. Integer interdum blandit magna'}
  ]

  constructor(private http : HttpClient,private utilsService : UtilsService) {}
  getAllCourses() : Observable<Course[]> {
    return this.http.get<Course[]>('/api/courses')
          .pipe(catchError(()=>of(this.courses)));
  }
  createCourse(payload : Course): Observable<Course> {
    return this.http.post<Course>('/api/courses',payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  deleteCourse(payload : string) : Observable<any>{
    return this.http.delete('/api/courses/' + payload).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }
  updateCourse(payload : string | number, changes : Partial<Course>) : Observable<any> {
    return this.http.patch('/api/courses/' + payload, changes).pipe(
      catchError((error)=>this.utilsService.handleError(error))      
    );
  }

}
