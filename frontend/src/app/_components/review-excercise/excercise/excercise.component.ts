import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';


@Component({
  selector: 'app-excercise',
  templateUrl: './excercise.component.html',
  styleUrls: ['./excercise.component.css']
})
export class ExcerciseComponent implements OnInit {
  //@Output() user : EventEmitter<User> = new EventEmitter();
  selectedOption : User;
  users : User[];
  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>this.users=data);
  }
  onSelectChange(){
    //this.user.emit(this.selectedOption);
    this.userService.user$.next(this.selectedOption);
  }
}
