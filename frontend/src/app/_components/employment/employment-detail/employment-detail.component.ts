import { Component, OnInit } from '@angular/core';
import { EmploymentService } from 'src/app/_services/employment.service';
import { Employment } from 'src/app/_models/employment';

@Component({
  selector: 'app-employment-detail',
  templateUrl: './employment-detail.component.html',
  styleUrls: ['./employment-detail.component.css']
})
export class EmploymentDetailComponent implements OnInit {
  employments : Employment[];
  constructor(private _employmentService : EmploymentService) { }
  ngOnInit() {
   this.employments = this._employmentService.getEmploymentDetail();
  }
}
