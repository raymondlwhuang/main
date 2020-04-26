import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { CourseState } from '../../_store/state/course.state';
import { areCoursesLoaded } from '../../_store/selectors/course.selector';
import { coursesLoaded, loadCourses } from '../../_store/actions/course.action';
import { tap, filter, first } from 'rxjs/operators';


@Injectable()
export class CourseResolver implements Resolve<Observable<any>> {
    constructor(private store : Store<CourseState>){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any> {
        return this.store.pipe(
            select(areCoursesLoaded),
            tap(coursesLoaded=>{
                if(!coursesLoaded) this.store.dispatch(loadCourses());
            }),
            filter(coursesLoaded=>coursesLoaded),
            first()
        )
    }
}