import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from '../_models/user';
import { Application } from '../_models/application';
import { users, userApplications, applications } from './users-and-applications';

@Injectable({
  providedIn: 'root',
})
export class Server {

  getUser(userEmail: string): Observable<User> {
    return of(users.find(user => user.email === userEmail));
  }

  getApplicationIdsForUser(userEmail: string): Observable<string[]> {
    return of(userApplications[userEmail].map(application => application.id) || []);
  }

  getUsers(): Observable<User[]>{
    return of(users);
  }

  getApplication(id: string): Observable<Application> {
    return of(applications.find(application => application.id === id));
  }
}