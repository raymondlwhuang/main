
import {CourseState, initialCourseState, adapter } from '../state/course.state';
import { createReducer, on } from '@ngrx/store';
import * as courseActionTypes from '../actions/course.action';

export const _CourseReducer = createReducer(
    initialCourseState,
    on(courseActionTypes.loadCourses,state => state),
    on(courseActionTypes.coursesLoaded,(state,action)=>adapter.addAll(action.payload, {...state, coursesLoaded: true})),
    on(courseActionTypes.createCourse,(state,action)=>adapter.addOne(action.payload,state)),
    on(courseActionTypes.deleteCourse,(state,action)=>adapter.removeOne(action.payload,state)),
    on(courseActionTypes.updateCourse,(state,action)=>adapter.updateOne(action.payload,state))
);

export function CourseReducer(state, action) {
    return _CourseReducer(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();