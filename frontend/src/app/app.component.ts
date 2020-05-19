import { Component, OnInit } from '@angular/core';
import { User } from './_models/user';
import { Router } from '@angular/router';
import { AuthenticationService } from './_services/authentication.service';
import { AuthGuard } from './_helpers/auth.guard';
import { Observable, Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'home-page';
  currentUser: User;
  isLoggedIn : boolean;
  parentClick:Subject<void> = new Subject<void>();
  isUserLooggedIn : boolean;
  constructor(
      private router: Router,
      public  authenticationService: AuthenticationService,
      private authGuard: AuthGuard
  ) {
    //this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
    this.isLoggedIn = this.authenticationService.isLoggedIn();
  }
  ngOnInit(){
    this.authenticationService.isLoggedIn$.subscribe(data=>this.isLoggedIn=data);
  }
  logout() {
      this.authenticationService.logout();
      this.router.navigate(['/']);
  }
  activate(id : string) {
    let buttons = document.getElementsByName('button');
    buttons.forEach(button=>{
      button.removeAttribute("style");
    });
    let buttonSelected = document.getElementById(id);
    buttonSelected.setAttribute("style", "color:red");
  }
  closeSideNav(){
    this.parentClick.next();
  }
}
