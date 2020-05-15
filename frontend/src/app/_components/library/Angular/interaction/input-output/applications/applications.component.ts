import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { Application } from 'src/app/_models/application';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.css']
})
export class ApplicationsComponent implements OnInit,OnChanges {
  @Input() user : User;
  ids : Array<string>;
  applications : Application[] = [];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    if(this.user) {
      this.applications=[];
      this.userService.getApplicationIdsForUser(this.user.email)
      .subscribe(ids=>ids.forEach(id=>this.userService.getApplication(id).subscribe(item=>this.applications.push(item))))
    }
  }

}
