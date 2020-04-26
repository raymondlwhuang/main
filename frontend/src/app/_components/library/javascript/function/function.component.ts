import { Component, OnInit, Input } from '@angular/core';
import { Favorite } from 'src/app/_models/favorite';
import { FavoriteService } from 'src/app/_services/favorite.service';

@Component({
  selector: 'app-function',
  templateUrl: './function.component.html',
  styleUrls: ['../frequent-usedjs/frequent-usedjs.component.css']
})
export class FunctionComponent implements OnInit {
  favorites : Favorite[];
  title = 'functions';
  promiseCount = 0;
  functions: any[] = [
    {name: 'Make your selection', value:''},
    {name: 'callback', value:'callback'},
    {name: 'call', value:'call'},
    {name: 'apply', value:'apply'},
    {name: 'bind', value:'bind'},
    {name: 'polyfill for bind', value:'polyfill for bind'},
    {name: 'findIndex', value:'findIndex'},
    {name: 'includes', value:'includes'},
    {name: 'padStart', value:'padStart'},
    {name: 'padEnd', value:'padEnd'},
    {name: 'await', value:'await'},
    {name: 'entries', value:'entries'},
    {name: 'values', value:'values'},
    {name: 'promise', value:'promise'},
  ];
  constructor(private _favorite : FavoriteService) { }

  ngOnInit() {
    this._favorite.getFavorites().subscribe(data => this.favorites = data); 
  }
  renderNewResult(option?:any){
    let snip = '';
    let output = '';
    let codeSnip = document.getElementById("code-snip");
    let showLog = document.getElementById("show-log");
    let outputBox = document.getElementById("output");
    if(option.value != '') {
      codeSnip.className = "add-border";
      this.favorites.forEach((result) => {
        if(option.value == result.name){
          result.snip.forEach(element => {
            snip += element + '</br>';
          });
          if(result.output){
            result.output.forEach(element => {
              output += element + '</br>';
            });
    
          }
        } 
      });
      if(option.value == 'promise') 
        showLog.classList.remove('hide-log');
      else
      showLog.className = 'hide-log';
    }
    else {
      codeSnip.classList.remove('add-border');
      outputBox.classList.remove('add-border');
    }
    codeSnip.innerHTML = snip;
    outputBox.innerHTML = output;
  } 
  MyDecision(wontDo=false) {
    let thisPromiseCount = ++this.promiseCount;

    let log = document.getElementById('output');
    //if(thisPromiseCount % 3 == 0) log.innerHTML = '';
    if(wontDo) log.innerHTML = thisPromiseCount +') Don\'t want do my job(<small>Looking at my task</small>)<br/>';
    else log.innerHTML = thisPromiseCount +') Started doing my job(<small>Beging my task</small>)<br/>';
      let promise1 = new Promise((resolve, reject) => {
        if(wontDo) return reject([thisPromiseCount,"I am tired"]);
        else {
          log.innerHTML += thisPromiseCount +') Working as promised (<small>promise started</small>)<br/>';
          setTimeout(() =>resolve(thisPromiseCount), Math.random() * 2000 + 1000);
        }
      }
      ).then((val) =>log.innerHTML += val +') My job is done (<small>promise fullfiled and ended</small>)<br/>')
    .catch((reason) =>log.innerHTML += reason[0] +') Promise rejected resason: ' + reason[1]+'<br/>');

      log.innerHTML += thisPromiseCount +') Promise ' + (wontDo ? 'rejected' : ' made') + '(<small>Sync code terminated</small>)<br/>';
    }    
}
