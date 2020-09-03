import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {
  @Output() user = new EventEmitter<User>();
  users : User[];
  selectedOpt : User;
  constructor(private userService : UserService){}
  ngOnInit(){
    this.userService.getUsers().subscribe(data=>this.users=data);
  }
  onSelectChange(){
    console.log("this is testing");
    this.user.emit(this.selectedOpt);
  }
}
