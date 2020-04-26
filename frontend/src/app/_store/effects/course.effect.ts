import * as courseActionTypes from '../actions/course.action';
import { CourseService } from '../../_services/course.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CourseEffects {
  constructor(private courseService: CourseService, private actions$: Actions, private router: Router) {}

  loadCourses$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.loadCourses),
      concatMap(() => this.courseService.getAllCourses()),
      map(payload => courseActionTypes.coursesLoaded({payload}))
    )
  );

  createCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.createCourse),
      concatMap((action) => this.courseService.createCourse(action.payload))
    ),
    {dispatch: false}
  );

  deleteCourse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.deleteCourse),
      concatMap((action) => this.courseService.deleteCourse(action.payload))
    ),
    {dispatch: false}
  );

  updateCOurse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(courseActionTypes.updateCourse),
      concatMap((action) => this.courseService.updateCourse(action.payload.id, action.payload.changes))
    ),
    {dispatch: false}
  );

}
