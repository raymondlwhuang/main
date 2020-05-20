import { Component, OnInit, Input, ViewChild, ViewChildren, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { Subject } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserListComponent } from 'src/app/_components/library/angular/helpers/user-list/user-list.component';
import { ShowCaseComponent } from '../show-case/show-case.component';
import { InputHolder } from 'src/app/_models/input-holder';

@Component({
  selector: 'app-demo-selector',
  templateUrl: './demo-selector.component.html',
  styleUrls: ['./demo-selector.component.css'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class DemoSelectorComponent implements OnInit {
  @Input() group : string;
  @ViewChild(UserListComponent) userListComponent : UserListComponent;
  @ViewChild(ShowCaseComponent) showCaseComponent : ShowCaseComponent;
  @ViewChildren(ShowCaseComponent) showCaseComponents : ShowCaseComponent[];
  inputHolder : InputHolder = {group: ''};
  demos : Demo[];
  names : Array<String>;
  parentClick: Subject<boolean> = new Subject<false>();
  flag: string;
  output: string;
  message: string;
  buttonMsg : string = "Start Clock";
  indicator : boolean = false;
  stop : any;
  user : User;
  currSnip: string = '';
  viewChildrenButton: any =['Child 1','Child 2','Child 3'];
  constructor(
    private demoService : DemoService,
    private changeDetectionRf : ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.demoService.getAllDemos().subscribe(items => {
      this.demos = items.filter(item=>((item.group==this.group ||item.group=='') && item.accepted));
      this.names=this.demos.map(demo=>demo.name).sort();
      if(this.demos.length ==1) this.names[0] = "Comming Soon!"
    }); 
  }
  startClock(indicator,element){
    this.indicator = indicator;
    if(indicator) {
      let _this = this;
      this.stop = setInterval(()=>{
        _this.userListComponent.today = new Date();
        this.changeDetectionRf.markForCheck();
      },1000);
      this.parentClick.next(true);
      this.buttonMsg = "Stop Clock"
    }
    else{
      this.parentClick.next(false);
      clearInterval(this.stop);
      this.buttonMsg = "Start Clock";
    } 
  }
  onSelect(user : User) {
    this.user = user;
  }

  renderNewResult(option?:any){
    this.parentClick.next(false);
    let snip = '';
//    let codeSnip = document.getElementsByClassName("code-snip");
    this.flag = option.value;
    this.inputHolder = {showCaseFlag:option.value,group:this.group};
    if(option.value != '') {
//      for(let i=0;i<codeSnip.length;i++) codeSnip[i].classList.add('add-border');
      this.demos.forEach((result) => {
        if(option.value == result.name){
          result.snips.forEach(element => snip += element + '</br>');
          this.output = '';
          result.outputs.forEach(element => this.output += element + '</br>');
          this.inputHolder = {showCaseFlag:option.value,helpPath:result.helpPath,indicator:result.indicator,output:this.output,group:this.group,name:result.name};
        } 
      });
    }
    else {
//      for(let i=0;i<codeSnip.length;i++) codeSnip[i].classList.remove('add-border');
      this.message = 'Please make your selection for show case';
    }
    this.buttonMsg = "Start Clock";
    this.indicator = false;
    clearInterval(this.stop);
    //codeSnip.innerHTML = snip;
    this.currSnip = snip;
  } 
  changeMessage(i : number){
    this.showCaseComponents.forEach((showCaseComponent,index) => {
      if(index == i) {
        showCaseComponent.message = "Child " + (index + 1) +" button had been Clicked";
        showCaseComponent.changeDetectionRf.markForCheck();
      };
    });
  }
  destroySubscript(){
    this.showCaseComponent.destroySubscript();
  }
}
