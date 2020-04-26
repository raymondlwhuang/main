import { createFeatureSelector, createSelector } from '@ngrx/store'
import { CourseState } from '../state/course.state'
import { selectAll } from '../reducers/course.reducer';


export const courseFeatureSelector = createFeatureSelector<CourseState>('courses');

export const getAllCourses = createSelector(courseFeatureSelector,selectAll);

export const areCoursesLoaded = createSelector(courseFeatureSelector,state=>state.coursesLoaded);