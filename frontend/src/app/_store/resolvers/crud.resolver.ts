import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { areCrudsLoaded } from '../selectors/crud.selector';
import { crudsLoaded, loadCruds } from '../actions/crud.action';
import { tap, filter, first } from 'rxjs/operators';
import { CrudState } from '../state/crud.state';


@Injectable()
export class CrudResolver implements Resolve<Observable<any>> {
    constructor(private store : Store<CrudState>){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any> {
        return this.store.pipe(
            select(areCrudsLoaded),
            tap(crudsLoaded=>{
                if(!crudsLoaded) this.store.dispatch(loadCruds());
            }),
            filter(crudsLoaded=>crudsLoaded),
            first()
        )
    }
}