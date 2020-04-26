import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  url = window.location.origin;
  constructor() { 
  }

  ngOnInit() {

  }
  renderNewResult(flag : string) {
   let selected : any;
   let clearEle = document.querySelectorAll('div,section,p');
   clearEle.forEach(element => element.removeAttribute("style"));
   switch (flag){
      case 'space':
        selected = document.querySelectorAll("div p");
        break;
      case 'greater_Sign':
        selected = document.querySelectorAll("div > p");
        break;
      case 'plus_Sign':
        selected = document.querySelectorAll("div + p");
        break;
      case 'aprox_Sign':
        selected = document.querySelectorAll("div ~ p");
        break;
      case 'first_p':
        selected = document.querySelectorAll("div p:first-child");
        break;
    }
    selected.forEach(element => {
      element.style.color = "red";
    });
  }
}
