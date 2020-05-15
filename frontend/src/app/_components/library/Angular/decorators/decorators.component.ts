import { Component, ViewChild, Input } from '@angular/core';
import { DemoSelectorComponent } from 'src/app/_helpers/demo-selector/demo-selector.component';

@Component({
  selector: 'app-decorators',
  templateUrl: './decorators.component.html',
  styleUrls: ['./decorators.component.css']
})
export class DecoratorsComponent {
  group : string = 'decorator';
  @Input()selectedIndex: number = 0;
  @ViewChild(DemoSelectorComponent) demoSelectorComponent : DemoSelectorComponent;
  tabClick(event){
    this.demoSelectorComponent.destroySubscript();
  }

}
