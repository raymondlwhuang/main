import { createAction, props } from '@ngrx/store';
import { Course } from 'src/app/_models/course';
import {Update} from '@ngrx/entity';

export const loadCourses = createAction(
    '[Courses List] Load Courses via Service',
);
export const coursesLoaded = createAction(
    '[Courses List] Courses Loaded Successfully',
    props<{payload : Array<Course>}>()
);

export const createCourse = createAction(
    '[Courses Component] - Create Courses',
    props<{payload:Course}>()
);

export const deleteCourse = createAction(
    '[Course Component] - Delete Course',
    props<{payload:string}>()
)

export const updateCourse = createAction(
    '[Courses List] - Update Course',
    props<{payload: Update<Course>}>()
)