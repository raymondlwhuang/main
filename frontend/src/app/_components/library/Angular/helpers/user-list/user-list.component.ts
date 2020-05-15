import { Component, OnInit,Output,EventEmitter, ElementRef, ViewChild, AfterViewInit, Input, OnDestroy} from '@angular/core';
import { User } from 'src/app/_models/user';
import { Subject, Observable, Subscription } from 'rxjs';
import { shareReplay, map } from 'rxjs/operators';
import { UserState } from 'src/app/_store/state/user.state';
import { Store, select } from '@ngrx/store';
import * as UserActions from 'src/app/_store/actions/user.action'
import {v4 as uuid} from 'uuid';
import { AutoUnsubscribe } from 'src/app/_decorators/custom.decorator';
@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
//@AutoUnsubscribe()
export class UserListComponent implements OnInit {
  users : Array<User>;
  selectedOption: User = {email: '',firstName: '',lastName: '',yearsActive: null};
  @Output() onSelect: EventEmitter<User>  = new EventEmitter();
  @Input() parentClick: Subject <boolean>;
  today: Date = new Date();
  message : string;
  user$ : Observable<UserState>;
  userSubscription : Subscription;
  userError : Error;
  id?: number;
  email?: string;
  username?: string;
  password?: string;
  firstName?: string;
  lastName?: string;
  yearsActive?: number=new Date().getFullYear();
  token?: string;

  constructor(
    private store : Store<{users:UserState}>)  {
    this.user$ = store.pipe(select('users'));
  }

  ngOnInit() {
    this.parentClick.pipe(shareReplay()).subscribe((data)=>{
      this.message = !this.message ? 'Had used ViewChild to update child message here' : '';
      let selected =  document.querySelectorAll("div p:first-child");
      if(data)
       selected.forEach((ele:HTMLElement)=>ele.style.color="red");
      else
        selected.forEach((ele:HTMLElement)=>ele.removeAttribute('style'));

      });
      this.userSubscription = this.user$.pipe(map(data=>{
        this.users = data.Users;
        this.userError = data.UserError;
      })).subscribe();
      this.store.dispatch(UserActions.beginGetUserAction());
  
  }
  renderNewResult(){
    this.onSelect.emit(this.selectedOption);
  }
}