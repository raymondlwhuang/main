import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { User } from '../_models/user';
import { Application } from '../_models/application';
import { Server } from '../_infrastructure/server';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  user : Subject<User> = new Subject<User>();
  user$ = new Subject<User>();
  constructor(private server: Server){}

  getUsers(): Observable<User[]> {
    return this.server.getUsers();
  }

  getUser(userEmail: string): Observable<User> {
    return this.server.getUser(userEmail);
  }

  getApplicationIdsForUser(userEmail: string): Observable<string[]> {
    return this.server.getApplicationIdsForUser(userEmail);
  }

  getApplication(id: string): Observable<Application> {
    return this.server.getApplication(id);
  }
  setSelectUser(user : User) {
    this.user.next(user);
  }
}