import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-review-excercise',
  templateUrl: './review-excercise.component.html',
  styleUrls: ['./review-excercise.component.css']
})
export class ReviewExcerciseComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit(): void {
  }
  setSelectedUser(event) {
    console.log(event);
    this.user = {...event};
  }

}
