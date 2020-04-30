
import { createReducer, on } from '@ngrx/store';
import * as crudActionTypes from '../actions/crud.action';
import { initialCrudState, adapter } from '../state/crud.state';

export const _CrudReducer = createReducer(
    initialCrudState,
    on(crudActionTypes.loadCruds,state => state),
    on(crudActionTypes.crudsLoaded,(state,action)=>adapter.addAll(action.payload, {...state, crudsLoaded: true})),
    on(crudActionTypes.createCrud,(state,action)=>adapter.addOne(action.payload,state)),
    on(crudActionTypes.deleteCrud,(state,action)=>adapter.removeOne(action.payload,state)),
    on(crudActionTypes.updateCrud,(state,action)=>adapter.updateOne(action.payload,state))
);

export function CrudReducer(state, action) {
    return _CrudReducer(state, action);
}

export const { selectAll, selectIds } = adapter.getSelectors();