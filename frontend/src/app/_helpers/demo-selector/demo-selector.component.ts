import { Component, OnInit, Input, ViewChild, ViewChildren, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { Subject, timer } from 'rxjs';
import { User } from 'src/app/_models/user';
import { UserListComponent } from 'src/app/_components/library/angular/helpers/user-list/user-list.component';
import { ShowCaseComponent } from '../show-case/show-case.component';
import { InputHolder } from 'src/app/_models/input-holder';
import { Employee } from 'src/app/_models/employee';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { EmployeeService } from 'src/app/_services/employee.service';
import { NestedMatTableDataSource } from '../nested-mat-table-data-source';
import { take } from 'rxjs/operators';
import { HtmlConsole } from 'src/app/_decorators/custom.decorator';

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

  employees : Employee[];

  displayedColumns: string[] = ['index', 'name.first', 'name.last', 'fullName', 'isActive', 'age','company','email','eyeColor'];
  dataDispInTable : any;
  dataSource : any;
  excuteStr: string;
  pageSize: number = 10;
  selectedOption: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  
  constructor(
    private demoService : DemoService,
    private _employeeService : EmployeeService,
    private changeDetectionRf : ChangeDetectorRef
    ) { }

  ngOnInit() {
    this.demoService.getAllDemos().subscribe(items => {
      this.demos = items.filter(item=>((item.group==this.group ||item.group=='') && item.accepted));
      this.names=this.demos.map(demo=>demo.name).sort();
      if(this.demos.length ==1) this.names[0] = "Comming Soon!"
    }); 
    this._employeeService.getEmployees().pipe(take(10)).subscribe((data) => {
      let res = data.slice(0,11);
      this.employees = res.map(result=>{
        result.fullName = result.name.first + ' ' + result.name.last;
        return result;
      });
      this.dataSource =  new NestedMatTableDataSource<Employee>(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
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
      /*????????? for array handling */
      let msg = '';
      switch(option.value) {
        case 'forEach':
          this.dataDispInTable =[];
          this.employees.forEach(employee=> {if(employee.eyeColor=='green') this.dataDispInTable.push(employee)});   
          break;
        case 'filter':
          this.dataDispInTable = this.employees.filter(employee => employee.eyeColor=='blue');
           break;
        case 'sort':
          this.dataDispInTable = this.employees.slice();
          this.dataDispInTable.sort((employee,employee1) =>employee.age > employee1.age ? 1 : -1);
          break;
        case 'find':
          this.dataDispInTable =[];
          this.dataDispInTable.push(this.employees.find(employee => employee.age < 22));
          break;
        case 'pop':
          this.dataDispInTable = this.employees.slice();
          this.dataDispInTable.pop();
          break;
        case 'reduce':
          this.dataDispInTable =[];
          let ageList = this.employees.slice().map(employee=>employee.age);
          msg = "<br><br>Grand Total of age is: " + ageList.reduce((total : number,age : number)=>total + age);
          timer(2000).subscribe(() => this.htmlConsole(msg));
          break;
        case 'shift':
          this.dataDispInTable = this.employees.slice();
          this.dataDispInTable.shift();
          break;
        case 'slice':
          this.dataDispInTable = this.employees.slice();
          this.dataDispInTable = this.dataDispInTable.slice(1, 3);
          break;
        default:
          this.dataDispInTable = this.employees;
      } 
      this.selectedOption = option.value;
      this.dataSource = new NestedMatTableDataSource<Employee>(this.dataDispInTable);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      /*??? end of array handling */
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
  @HtmlConsole({id :'demo-output'})
  htmlConsole(message?) {
  }   

}
