import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.css']
})
export class ReviewComponent implements OnInit {
  @Input() user : User;
 
  ngOnInit(): void {
  }

}
