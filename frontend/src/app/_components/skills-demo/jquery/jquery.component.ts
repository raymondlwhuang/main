import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jquery',
  templateUrl: './jquery.component.html',
  styleUrls: ['../javascript/javascript.component.css']
})
export class JqueryComponent implements OnInit {
  url = window.location.origin+'/jQuery/index.html';
  constructor() { }

  ngOnInit() {
  }


}
