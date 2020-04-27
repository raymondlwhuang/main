import * as demoActionTypes from '../actions/demo.action';
import { DemoService } from '../../_services/demo.service';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { concatMap, map, tap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable()
export class DemoEffects {
  constructor(private demoService: DemoService, private actions$: Actions, private router: Router) {}

  loadDemos$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActionTypes.loadDemos),
      concatMap(() => this.demoService.getAllDemos()),
      map(payload => demoActionTypes.demosLoaded({payload}))
    )
  );

  createDemo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActionTypes.createDemo),
      concatMap((action) => this.demoService.createDemo(action.payload))
    ),
    {dispatch: false}
  );

  deleteDemo$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActionTypes.deleteDemo),
      concatMap((action) => this.demoService.deleteDemo(action.payload))
    ),
    {dispatch: false}
  );

  updateCOurse$ = createEffect(() =>
    this.actions$.pipe(
      ofType(demoActionTypes.updateDemo),
      concatMap((action) => this.demoService.updateDemo(action.payload.id, action.payload.changes))
    ),
    {dispatch: false}
  );

}
