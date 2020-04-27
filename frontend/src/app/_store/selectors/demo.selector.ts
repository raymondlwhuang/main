import { createFeatureSelector, createSelector } from '@ngrx/store'
import { DemoState } from '../state/demo.state'
import { selectAll } from '../reducers/demo.reducer';


export const demoFeatureSelector = createFeatureSelector<DemoState>('demos');

export const getAllDemos = createSelector(demoFeatureSelector,selectAll);

export const areDemosLoaded = createSelector(demoFeatureSelector,state=>state.demosLoaded);