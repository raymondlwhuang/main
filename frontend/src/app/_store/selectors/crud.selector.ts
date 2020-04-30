import { createFeatureSelector, createSelector } from '@ngrx/store'
import { selectAll } from '../reducers/crud.reducer';
import { CrudState } from '../state/crud.state';

export const crudFeatureSelector = createFeatureSelector<CrudState>('cruds');

export const getAllCruds = createSelector(crudFeatureSelector,selectAll);

export const areCrudsLoaded = createSelector(crudFeatureSelector,state=>state.crudsLoaded);