import { Component, Input, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable, Subject } from 'rxjs';
import { map, shareReplay } from 'rxjs/operators';
import { AuthenticationService } from '../../_services/authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit{
  opened : boolean;
  isLoggedIn : boolean;
  @Input()  parentClick: Subject <void>;
  
  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches),
      shareReplay()
    );

  constructor(private breakpointObserver: BreakpointObserver,
              private router: Router,
              public  authenticationService: AuthenticationService) {}
  ngOnInit(){
    this.parentClick.subscribe(()=>this.opened = false);
    //this.isLoggedIn = this.authenticationService.isLoggedIn();
    this.authenticationService.isLoggedIn$.subscribe(data=>this.isLoggedIn=data);
  }
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/']);
}  
}
