import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from '../../environments/environment';
import { User } from '../_models/user';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {
    currentUser$ = new Subject<User>();
    isLoggedIn$ = new Subject<boolean>();
    constructor(private http: HttpClient) {
        this.isLoggedIn();
    }

    public get currentUserValue(): User {
        return JSON.parse(localStorage.getItem('currentUser'));
    }
    isLoggedIn() : boolean {
        let  currTime = Date.now();
        let diff : number = currTime - parseInt(localStorage.getItem('loginTime')) ;
        if(diff < 7200000) { //logout in 2 hours
            return true;
        } 
        this.logout();
        return false;
    }    
    login(username: string, password: string) {
        return this.http.post<any>(`${environment.apiUrl}/users/authenticate`, { username, password })
            .pipe(map(user => {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('currentUser', JSON.stringify(user));
                localStorage.setItem('loginTime', Date.now().toString());
                this.currentUser$.next(user);
                this.isLoggedIn$.next(true);
                return user;
            }));
    }

    logout() {
        // remove user from local storage to log user out
        localStorage.removeItem('currentUser');
        localStorage.removeItem('loginTime');
        this.isLoggedIn$.next(false);
        this.currentUser$.next(null);
    }
}