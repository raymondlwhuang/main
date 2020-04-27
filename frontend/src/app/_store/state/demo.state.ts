import { Demo } from 'src/app/_models/demo';
import { EntityState, EntityAdapter, createEntityAdapter } from '@ngrx/entity';

export interface DemoState extends EntityState<Demo> {
    demosLoaded: boolean;
  }

export const adapter: EntityAdapter<Demo> = createEntityAdapter<Demo>();

export const initialDemoState = adapter.getInitialState({
    demosLoaded: false
});