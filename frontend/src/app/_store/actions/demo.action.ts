import { createAction, props } from '@ngrx/store';
import { Demo } from 'src/app/_models/demo';
import { Update } from '@ngrx/entity';

export const loadDemos = createAction(
    '[Demos List] Load Demos via Service',
);
export const demosLoaded = createAction(
    '[Demos List] Demos Loaded Successfully',
    props<{payload : Array<Demo>}>()
);

export const createDemo = createAction(
    '[Demos Component] - Create Demos',
    props<{payload:Demo}>()
);

export const deleteDemo = createAction(
    '[Demo Component] - Delete Demo',
    props<{payload:string}>()
)

export const updateDemo = createAction(
    '[Demos List] - Update Demo',
    props<{payload: Update<Demo>}>()
)