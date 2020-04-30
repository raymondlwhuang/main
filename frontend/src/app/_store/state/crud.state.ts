import { Crud } from 'src/app/_models/crud';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

// export interface CrudState {
//     Cruds : Array<Crud>;
//     CrudError: Error;
// }
export interface CrudState extends EntityState<Crud> {
    crudsLoaded: boolean;
  }

// export const initialCrudState = () : CrudState =>{
//     return { Cruds : Array<Crud>(),CrudError : null }
// }
export const adapter: EntityAdapter<Crud> = createEntityAdapter<Crud>();

export const initialCrudState = adapter.getInitialState({
    crudsLoaded: false
});