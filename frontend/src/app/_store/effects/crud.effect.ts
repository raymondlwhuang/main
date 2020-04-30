import * as crudActionTypes from '../actions/crud.action';
import { CrudService } from '../../_services/crud.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class CrudEffects {
  constructor(private crudService: CrudService, private actions$: Actions, private router: Router) {}

  loadCruds$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crudActionTypes.loadCruds),
      concatMap(() => this.crudService.getAllCruds()),
      map(payload => crudActionTypes.crudsLoaded({payload}))
    )
  );

  createCrud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crudActionTypes.createCrud),
      concatMap((action) => this.crudService.createCrud(action.payload))
    ),
    {dispatch: false}
  );

  deleteCrud$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crudActionTypes.deleteCrud),
      concatMap((action) => this.crudService.deleteCrud(action.payload))
    ),
    {dispatch: false}
  );

  updateCOurse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(crudActionTypes.updateCrud),
      concatMap((action) => this.crudService.updateCrud(action.payload.id, action.payload.changes))
    ),
    {dispatch: false}
  );

}
