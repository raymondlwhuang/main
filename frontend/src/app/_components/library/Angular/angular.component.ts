import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { DemoSelectorComponent } from 'src/app/_helpers/demo-selector/demo-selector.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';

@Component({
  selector: 'app-app-angular',
  templateUrl: './angular.component.html',
  styleUrls: ['./angular.component.css']
})
export class AngularComponent implements AfterViewInit {
  @ViewChild(DemoSelectorComponent,{static:false}) demoSelectorComponent : DemoSelectorComponent;
  @ViewChild(ChangeDetectionComponent,{static:false}) changeDetectionComponent : ChangeDetectionComponent;
  ngAfterViewInit(){
    this.changeDetectionComponent.destroySubscript();
  }
  tabClick(event?){
    this.demoSelectorComponent.destroySubscript();
    if(event.tab.textLabel != 'Change Detection') this.changeDetectionComponent.destroySubscript();
    else this.changeDetectionComponent.ngOnInit();
  }

}
