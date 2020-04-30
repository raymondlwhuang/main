import {Component, ChangeDetectionStrategy, ViewChild} from "@angular/core";
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { Employee } from 'src/app/_models/employee';
import { Favorite } from 'src/app/_models/favorite';
import { EmployeeService } from 'src/app/_services/employee.service';
import { FavoriteService } from 'src/app/_services/favorite.service';
import { NestedMatTableDataSource } from 'src/app/_helpers/nested-mat-table-data-source';

@Component({
  selector: 'app-frequent-usedjs',
  templateUrl: './frequent-usedjs.component.html',
  styleUrls: ['./frequent-usedjs.component.css'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FrequentUsedjsComponent {
  employees : Employee[];
  favorites : Favorite[];
  functions: any[] = [
    {name: 'Make your selection', value:''},
    {name: 'forEach', value:'forEach'},
    {name: 'filter', value:'filter'},
    {name: 'sort', value:'sort'},
    {name: 'find', value:'find'},
    {name: 'pop', value:'pop'},
    {name: 'shift', value:'shift'},
    {name: 'slice', value:'slice'}
  ];
  displayedColumns: string[] = ['index', 'name.first', 'name.last', 'fullName', 'isActive', 'age','company','email','eyeColor'];
  demoOutput : any;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  constructor(private _employeeService : EmployeeService,
    private _favorite : FavoriteService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((data) => {
      this.employees = data.map(result=>{
        result.fullName = result.name.first + ' ' + result.name.last;
        return result;
      });
      this.dataSource =  new NestedMatTableDataSource<Employee>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });
    this._favorite.getFavorites().subscribe(data => this.favorites = data); 
  }
  renderNewResult(option?:any){
    this.demoOutput =[];
    switch(option.value) {
      case 'forEach':
        this.employees.forEach(employee=> employee.eyeColor=='green' ? this.demoOutput.push(employee) : null);
   
        break;
      case 'filter':
        this.demoOutput = this.employees.filter(employee => employee.eyeColor=='blue');
         break;
      case 'sort':
        this.demoOutput = this.employees.slice();
        this.demoOutput.sort((employee,employee1) =>employee.age > employee1.age ? 1 : -1);
        break;
      case 'find':
        let findItem = this.employees.find(employee => employee.age < 22);
        this.demoOutput.push(findItem);
        break;
      case 'pop':
        this.demoOutput = this.employees.slice();
        this.demoOutput.pop();
        break;
      case 'reduce':
        // this.demoOutput = _.reduce([175, 50, 25], function(sum, n) {
        //     return sum + n;
        // });
        break;
      case 'shift':
        this.demoOutput = this.employees.slice();
        this.demoOutput.shift();
        break;
      case 'slice':
        this.demoOutput = this.employees.slice();
        this.demoOutput = this.demoOutput.slice(1, 3);
        break;
      default:
        this.demoOutput = this.employees;
    }    
    this.dataSource = new NestedMatTableDataSource<Employee>(this.demoOutput);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    let snip = '';
    let codSnip = document.getElementById("code-snip");
    if(option.value != '') {
      codSnip.className = "add-border";
      this.favorites.forEach((result) => {
        if(option.value == result.name){
          result.snip.forEach(element => {
            snip += element + '</br>';
          });
        } 
      });
    }
    else {
      codSnip.classList.remove('add-border');
    }
    codSnip.innerHTML = snip;
  } 


}
