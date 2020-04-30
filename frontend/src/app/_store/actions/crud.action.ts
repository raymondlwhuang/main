import { createAction, props } from '@ngrx/store';
import { Crud } from 'src/app/_models/crud';
import {Update} from '@ngrx/entity';

export const loadCruds = createAction(
    '[Cruds List] Load Cruds via Service',
);
export const crudsLoaded = createAction(
    '[Cruds List] Cruds Loaded Successfully',
    props<{payload : Array<Crud>}>()
);

export const createCrud = createAction(
    '[Cruds Component] - Create Cruds',
    props<{payload:Crud}>()
);

export const deleteCrud = createAction(
    '[Crud Component] - Delete Crud',
    props<{payload:string}>()
)

export const updateCrud = createAction(
    '[Cruds List] - Update Crud',
    props<{payload: Update<Crud>}>()
)