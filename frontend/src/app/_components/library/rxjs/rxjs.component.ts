import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { DemoSelectorComponent } from 'src/app/_helpers/demo-selector/demo-selector.component';

@Component({
  selector: 'app-rxjs',
  templateUrl: './rxjs.component.html',
  styleUrls: ['./rxjs.component.css']
})
export class RxjsComponent {
  @ViewChild(DemoSelectorComponent,{static:false}) demoSelectorComponent : DemoSelectorComponent;
  tabClick(event){
    this.demoSelectorComponent.destroySubscript();
  }
}
