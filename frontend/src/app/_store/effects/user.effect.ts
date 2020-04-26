import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable, of } from 'rxjs';
import { catchError, map, mergeMap, tap } from 'rxjs/operators';
import * as UserActions from '../actions/user.action';
import {User} from '../../_models/user';
import { Server } from '../../_infrastructure/server'

@Injectable()
export class UserEffects {
  constructor(private http: HttpClient, private action$: Actions,private server : Server) {}

  private ApiURL: string = 'https://localhost:4200/api/User';

  GetUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.beginGetUserAction),
      mergeMap(action =>
        this.server.getUsers().pipe(
          map((data: User[]) => {
            return UserActions.successGetUserAction({ payload: data });
          }),
          catchError((error: Error) => {
            return of(UserActions.errorUserAction(error));
          })
        )
      )
    )
  );

  CreateUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.beginCreateUserAction),
      mergeMap(action =>
        this.http
          .post(this.ApiURL, JSON.stringify(action.payload), {
            headers: { 'Content-Type': 'application/json' }
          })
          .pipe(
            map((data: User) => {
              return UserActions.successCreateUserAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(UserActions.errorUserAction(error));
            })
          )
      )
    )
  );
  DeleteUsers$: Observable<Action> = createEffect(() =>
    this.action$.pipe(
      ofType(UserActions.beginDeleteUserAction),
      mergeMap(action =>
        this.http
          .post(this.ApiURL, JSON.stringify(action.payload), {
            headers: { 'Content-Type': 'application/json' }
          })
          .pipe(
            map((data: string) => {
              return UserActions.successDeleteUserAction({ payload: data });
            }),
            catchError((error: Error) => {
              return of(UserActions.errorUserAction(error));
            })
          )
      )
    )
  );  
}