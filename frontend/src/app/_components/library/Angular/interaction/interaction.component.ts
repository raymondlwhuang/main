import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';

@Component({
  selector: 'app-interaction',
  templateUrl: './interaction.component.html',
  styleUrls: ['./interaction.component.css']
})
export class InteractionComponent implements OnInit {
  user : User;
  constructor() { }

  ngOnInit(): void {
  }
  setSelectedUser(event){
    this.user = {...event};
  }
}
