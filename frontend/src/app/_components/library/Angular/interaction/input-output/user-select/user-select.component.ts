import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/app/_services/user.service';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-user-select',
  templateUrl: './user-select.component.html',
  styleUrls: ['./user-select.component.css']
})
export class UserSelectComponent implements OnInit {
  @Output() user : EventEmitter<User> = new EventEmitter();
  selectOption : User;
  users : User[];
  constructor(private userService : UserService) { }

  ngOnInit(): void {
    this.userService.getUsers().subscribe(data=>this.users=data);
  }
  onSelectChange() {
    this.user.emit(this.selectOption);
  }
  showHide(){
      document.querySelectorAll("#show-hide textarea").forEach(ele=>ele.classList.toggle("hide"));
      document.querySelector('.unarchive').classList.toggle('turn');
  }
}
