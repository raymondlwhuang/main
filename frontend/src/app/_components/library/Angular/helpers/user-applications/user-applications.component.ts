import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import { User } from 'src/app/_models/user';
import { Application } from 'src/app/_models/application';
import { UserService } from 'src/app/_services/user.service';
import { Server } from 'src/app/_infrastructure/server';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-user-applications',
  templateUrl: './user-applications.component.html',
  styleUrls: ['./user-applications.component.css']
})
export class UserApplicationsComponent implements OnInit {
  @Input()  user:User;
  application : Application;
  onChanges = new Subject<SimpleChanges>();
  constructor(private userService : UserService,private server : Server) { }

  ngOnInit() {
    this.onChanges.subscribe((data:SimpleChanges)=>{
      this.userService.getApplicationIdsForUser(data.user.currentValue.email).subscribe(
        data=>this.server.getApplication(data[0]).subscribe(item=>this.application = item)
      );  
    });    
  }
  ngOnDestroy(){
    this.onChanges.complete();
  }

  ngOnChanges(changes:SimpleChanges){
    this.onChanges.next(changes);

  }
/* second way to do this
export class UserApplicationsComponent implements OnInit {
  @Input()  user:User;
  application : Application = {id: '',name:''};
  isInited : boolean = false;
  constructor(private userService : UserService,private server : Server) { }

  ngOnInit() {
  }
  ngOnChanges(changes: SimpleChanges) {
      if(this.isInited) {
        this.userService.getApplicationIdsForUser(changes.user.currentValue.email).subscribe(
          data=>this.server.getApplication(data[0]).subscribe(item=>this.application = item)
        );  
      }
      else this.isInited = true;
  }
}
*/

}