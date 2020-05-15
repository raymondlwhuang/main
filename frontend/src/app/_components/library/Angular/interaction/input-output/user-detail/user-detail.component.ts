import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent {
  @Input() user : User;
  constructor() { }

  showHide(){
    document.querySelectorAll('#detail textarea').forEach(ele=>ele.classList.toggle('hide'));
    document.querySelector('.unarchive').classList.toggle('turn');
  }
}
