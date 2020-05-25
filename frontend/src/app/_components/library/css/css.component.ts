import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-css',
  templateUrl: './css.component.html',
  styleUrls: ['./css.component.css']
})
export class CssComponent implements OnInit {
  description: string ='';
  constructor() { 
  }

  ngOnInit() {

  }
  renderNewResult(flag : string) {
   let selected : any;
   let clearEle = document.querySelectorAll('div,section,p');
   clearEle.forEach(element => element.removeAttribute("style"));
   this.description="";
   switch (flag){
      case 'space':
        selected = document.querySelectorAll("div p");
        this.description="Selects all <p> elements inside <div> elements";
        break;
      case 'greater_Sign':
        selected = document.querySelectorAll("div > p");
        this.description="Selects all <p> elements where the parent is a <div> element";
        break;
      case 'plus_Sign':
        selected = document.querySelectorAll("div + p");
        this.description="Selects all <p> elements that are placed immediately after <div> elements";
        break;
      case 'aprox_Sign':
        selected = document.querySelectorAll("div ~ p");
        this.description="Selects every <p> element that are preceded by a <div> element";
        break;
      case 'first_p':
        selected = document.querySelectorAll("p:first-child");
        this.description="Selects every <p> element that is the first child of its parent";
        break;
    }
    selected.forEach(element => {
      element.style.color = "#FF0000";
    });
  }
}
