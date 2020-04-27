import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { Resolve, ActivatedRoute, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Store, select } from '@ngrx/store';
import { DemoState } from '../../_store/state/demo.state';
import { areDemosLoaded } from '../../_store/selectors/demo.selector';
import { demosLoaded, loadDemos } from '../../_store/actions/demo.action';
import { tap, filter, first } from 'rxjs/operators';


@Injectable()
export class DemoResolver implements Resolve<Observable<any>> {
    constructor(private store : Store<DemoState>){}

    resolve(route : ActivatedRouteSnapshot, state : RouterStateSnapshot) : Observable<any> {
        return this.store.pipe(
            select(areDemosLoaded),
            tap(demosLoaded=>{
                if(!demosLoaded) this.store.dispatch(loadDemos());
            }),
            filter(demosLoaded=>demosLoaded),
            first()
        )
    }
}