import { Course } from 'src/app/_models/course';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// export interface CourseState {
//     Courses : Array<Course>;
//     CourseError: Error;
// }
export interface CourseState extends EntityState<Course> {
    coursesLoaded: boolean;
  }

// export const initialCourseState = () : CourseState =>{
//     return { Courses : Array<Course>(),CourseError : null }
// }
export const adapter: EntityAdapter<Course> = createEntityAdapter<Course>();

export const initialCourseState = adapter.getInitialState({
    coursesLoaded: false
});