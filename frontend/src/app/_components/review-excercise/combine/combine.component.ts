import { Component, OnInit, OnChanges, Input } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';
import { Application } from 'src/app/_models/application';

@Component({
  selector: 'app-combine',
  templateUrl: './combine.component.html',
  styleUrls: ['./combine.component.css']
})
export class CombineComponent implements OnInit {
  applications : Application[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.user$.subscribe(data=>{
      this.userService.getApplicationIdsForUser(data.email).subscribe(ids=>{
        this.applications = [];
        ids.forEach(item=>{
          this.userService.getApplication(item).subscribe(app=>this.applications.push(app));
        })
      });
    })
  }

}
