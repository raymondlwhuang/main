import {Component, ChangeDetectionStrategy, ViewChild} from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/_models/employee';
import { EmployeeService } from 'src/app/_services/employee.service';
import { NestedMatTableDataSource } from 'src/app/_helpers/nested-mat-table-data-source';
import { DemoService } from 'src/app/_services/demo.service';
import { Demo } from 'src/app/_models/demo';
import { take, mapTo } from 'rxjs/operators';
import { HtmlConsole } from 'src/app/_decorators/custom.decorator';
import { timer } from 'rxjs';

@Component({
  selector: 'app-array',
  templateUrl: './array.component.html',
  styleUrls: ['./array.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ArrayComponent {
  demos : Demo[];
  names : Array<String>;

  employees : Employee[];

  displayedColumns: string[] = ['index', 'name.first', 'name.last', 'fullName', 'isActive', 'age','company','email','eyeColor'];
  dataDispInTable : any;
  dataSource : any;
  excuteStr: string;
  pageSize: number = 10;
  selectedOption: string;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private demoService : DemoService,private _employeeService : EmployeeService) { }

  ngOnInit() {
    this.demoService.getAllDemos().subscribe(items => {
      this.demos = items.filter(item=>((item.group=='array' ||item.group=='') && item.accepted));
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
  renderNewResult(option?:any){
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
    this.showResult(this.selectedOption);
  } 
  showResult(selectedOption: string){
     this.dataSource = new NestedMatTableDataSource<Employee>(this.dataDispInTable);
     this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
    console.log(this.dataDispInTable);
    let snips = '';
    let outputs = '';
    let codSnip = document.getElementById("code-snip");
    let codeOutput = document.getElementById("output");
    if(selectedOption != '') {
      codSnip.className = "add-border";
      codeOutput.className = "add-border";
      this.demos.forEach((result) => {
        if(selectedOption == result.name){
          result.snips.forEach(element => {
            snips += element + '</br>';
          });
          result.outputs.forEach(element=>outputs += element+'\n')
        } 
      });
    }
    else {
      codSnip.classList.remove('add-border');
      codeOutput.classList.remove('add-border');
    }
    codSnip.innerHTML = snips;
    codeOutput.innerHTML = outputs;
  }
  showHide(){
    document.getElementById('show-hide').classList.toggle("expend");
    document.getElementById('show-hide-sign').classList.toggle("expend");
  }
  @HtmlConsole({id :'output'})
  htmlConsole(message?) {
  }   
  
}
