import { Component, OnInit, ViewChild } from '@angular/core';
import { DemoSelectorComponent } from 'src/app/_helpers/demo-selector/demo-selector.component';

@Component({
  selector: 'app-javascript',
  templateUrl: './javascript.component.html',
  styleUrls: ['./javascript.component.css']
})
export class JavascriptComponent implements OnInit {
  @ViewChild(DemoSelectorComponent) demoSelectorComponent : DemoSelectorComponent;
  url = window.location.origin+'/JavaScript/index.html';
  constructor() {
  }

  ngOnInit() {
  }
  tabClick(event){
    this.demoSelectorComponent.destroySubscript();
  }

}
