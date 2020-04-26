import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from 'src/app/_services/authentication.service';
import { Observable, Subscription } from 'rxjs';
import { UserState } from 'src/app/_store/state/user.state';
import { User } from 'src/app/_models/user';
import { State, Store, select } from '@ngrx/store';
import { map } from 'rxjs/operators';
import * as UserActions from 'src/app/_store/actions/user.action'
import {v4 as uuid} from 'uuid';
@Component({
  selector: 'app-pre-show',
  templateUrl: './pre-show.component.html',
  styleUrls: ['./pre-show.component.css']
})
export class PreShowComponent implements OnInit {

  user$ : Observable<UserState>;
  userSubscription : Subscription;
  userList : Array<User>;
  userError : Error;
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  yearsActive?: number;
  token?: string;
   constructor(private store : Store <{users : UserState}>,
    private authenticationService: AuthenticationService,
    private router : Router) { 
      this.user$ = this.store.pipe(select('users'));
      // redirect to home if already logged in
    if (!this.authenticationService.currentUserValue) { 
    this.router.navigate(['/login']);
    }

}

  ngOnInit() {
    this.userSubscription = this.user$.pipe(
      map(data=>{
        this.userList = data.Users;
        this.userError = data.UserError;
      })
    ).subscribe();
    this.store.dispatch(UserActions.beginGetUserAction());
  }
  ngOnDestroy(): void {
  }
  createUser() {
    if(this.firstName!='' || this.lastName!='') {
      const user: User = { 
        id : uuid(),
        email:this.email,
        username: this.firstName + ' ' + this.lastName,
        firstName:this.firstName,
        lastName:this.lastName,
        yearsActive:this.yearsActive,
       };
     
      this.store.dispatch(UserActions.createUserAction(user));
      this.store.dispatch(UserActions.beginCreateUserAction({ payload: user }));
      this.id = 0;
      this.email='';
      this.firstName='';
      this.lastName='';
      this.yearsActive=0;
    }

  }
  showHide(flag? : number){
    document.getElementById('show-hide').classList.toggle("expend");
    document.getElementById('show-hide-sign').classList.toggle("expend");
    if(flag) document.getElementById('old').classList.toggle("hide");
    else  document.getElementById('new').classList.toggle("hide");
  }
  deleteUser(email:string){
    this.store.dispatch(UserActions.deleteUserAction({payload:email}));
    this.store.dispatch(UserActions.beginDeleteUserAction({ payload: email }));
  }
}
