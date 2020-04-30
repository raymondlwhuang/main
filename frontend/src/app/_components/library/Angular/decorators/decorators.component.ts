import { Component, ViewChild } from '@angular/core';
import { DemoSelectorComponent } from 'src/app/_helpers/demo-selector/demo-selector.component';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent {
  group : string = 'decorator';
  @ViewChild(DemoSelectorComponent,{static:false}) demoSelectorComponent : DemoSelectorComponent;
  tabClick(event){
    this.demoSelectorComponent.destroySubscript();
  }

}
