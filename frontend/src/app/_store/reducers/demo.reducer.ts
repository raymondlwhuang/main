
import {DemoState, initialDemoState, adapter } from '../state/demo.state';
import { createReducer, on } from '@ngrx/store';
import * as demoActionTypes from '../actions/demo.action';

export const _DemoReducer = createReducer(
    initialDemoState,
    on(demoActionTypes.loadDemos,state => state),
    on(demoActionTypes.demosLoaded,(state,action)=>adapter.addAll(action.payload, {...state, demosLoaded: true})),
    on(demoActionTypes.createDemo,(state,action)=>adapter.addOne(action.payload,state)),
    on(demoActionTypes.deleteDemo,(state,action)=>adapter.removeOne(action.payload,state)),
    on(demoActionTypes.updateDemo,(state,action)=>adapter.updateOne(action.payload,state))
);

export function DemoReducer(state, action) {
    return _DemoReducer(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();