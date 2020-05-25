import { FormControl, FormGroup, Validators, FormArray } from '@angular/forms';
import {MatSnackBar} from '@angular/material/snack-bar';
import { SnackBarComponent } from 'src/app/_components/snack-bar/snack-bar.component';
import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Demo } from 'src/app/_models/demo';
import { DemoService } from 'src/app/_services/demo.service';
import { Store, select } from '@ngrx/store';
import { DemoState } from 'src/app/_store/state/demo.state';
import { getAllDemos } from 'src/app/_store/selectors/demo.selector';
import * as demoActionTypes from 'src/app/_store/actions/demo.action';
import { Update } from '@ngrx/entity';
import { NgForm }   from '@angular/forms';
import {v4 as uuid} from 'uuid';
import { NestedMatTableDataSource } from 'src/app/_helpers/nested-mat-table-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-assets-entry',
  templateUrl: './assets-entry.component.html',
  styleUrls: ['./assets-entry.component.css']
})
export class AssetsEntryComponent implements OnInit {
demos$ : Observable<Demo[]>;
demoToBeUpdated : Demo = 	{ 
  "group":"",
  "name": "", 
  "snips": [],
  "outputs": [],
  "helpPath" : "",
  "indicator": 0
}
demos : Demo[];
groups : any[];
isUpdateActivated = false;
isAddActivated = false;
dataSource : any;
group : string;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

  name = new FormControl();
  title = 'angforms';
  submitted : boolean = false;
  angForm = new FormGroup({
    name : new FormControl('', Validators.required),
    group : new FormControl('', Validators.required),
    helpPath : new FormControl(''),
    snips: new FormArray([new FormControl('')]),
    outputs : new FormArray([new FormControl('')]),
    indicator: new FormControl(0)
  }); 
  constructor(
    private _snackBar: MatSnackBar,
    private demoService : DemoService, 
    private store : Store<DemoState>
  ) {}
  displayedColumns: string[] = ['group','name', 'helpPath','operations'];

  ngOnInit() {
    this.demos$ = this.store.pipe(select(getAllDemos));
    this.demos$.subscribe(data=>{
      this.demos = data;
      this.groups = [...new Set(data.map(item=>item.group.toUpperCase()))].sort();
      this.dataSource =  new NestedMatTableDataSource<Demo>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  deleteDemo(payload:string) {
    this.store.dispatch(demoActionTypes.deleteDemo({payload}))
  }
  showUpdateForm(payload : Demo) {
    this.demoToBeUpdated = {...payload};
    this.snips.clear();
    this.outputs.clear();
    this.angForm.get('name').setValue(this.demoToBeUpdated.name);
    this.angForm.get('group').setValue(this.demoToBeUpdated.group);
    this.angForm.get('helpPath').setValue(this.demoToBeUpdated.helpPath);
    this.angForm.get('indicator').setValue(this.demoToBeUpdated.indicator);

    if(this.demoToBeUpdated.snips.length == 0) {
      (<FormArray>this.snips).push(new FormControl(''));
    }
    else {
      this.demoToBeUpdated.snips.forEach(snip=>(<FormArray>this.snips).push(new FormControl(snip)));
    }
    if(this.demoToBeUpdated.outputs.length == 0) {
      (<FormArray>this.outputs).push(new FormControl(''));
    }
    else  {
      this.demoToBeUpdated.outputs.forEach(output=>(<FormArray>this.outputs).push(new FormControl(output)));
    }
    this.isUpdateActivated = true;
  }
  showAddForm() {
    this.isAddActivated = true;
  }
  AddDemo(submittedForm) {
    this.isAddActivated = false;
    if(submittedForm.invalid) {
      return;
    }
    const payload : Demo = {
      id: uuid(), 
      name: submittedForm.value.name, 
      group:submittedForm.value.group,
      snips:submittedForm.value.snips,
      outputs:submittedForm.value.outputs,
      helpPath:submittedForm.value.helpPath,
      indicator:submittedForm.value.indicator,
    };
    this.store.dispatch(demoActionTypes.createDemo({payload}));  
  }  
  updateDemo(submittedForm){
    const payload: Update<Demo> = {
      id: this.demoToBeUpdated.id,
      changes: {
        ...this.demoToBeUpdated,
        ...submittedForm.value
      }
    };
    this.store.dispatch(demoActionTypes.updateDemo({payload}));

    this.isUpdateActivated = false;
    this.formReset();    
  }
  cancel(){
    this.isUpdateActivated = false;
    this.formReset();
  }

  get snips(): FormArray {
    return this.angForm.get('snips') as FormArray;
  } 
  get outputs(): FormArray {
    return this.angForm.get('outputs') as FormArray;
  } 
  get formInput() {
    return this.angForm.controls;
  }
  formReset(){
    this.submitted = false;
    this.demoToBeUpdated = 	{ 
      "group":"",
      "name": "", 
      "snips": [],
      "outputs": [],
      "helpPath" : "",
      "indicator": 0
    };
    this.angForm.get('name').setValue('');
    this.angForm.get('group').setValue('');
    this.angForm.get('helpPath').setValue('');
    this.angForm.get('indicator').setValue(0);
    this.snips.clear();
    this.outputs.clear();   
    (<FormArray>this.snips).push(new FormControl(''));   
    (<FormArray>this.outputs).push(new FormControl(''));   
    this.angForm.markAsUntouched();
  }

  onFormSubmit(submittedForm): void {
    if(submittedForm.invalid) {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000,
        data: "Please fill in all requsted information"
      });          

    }
    if(this.isUpdateActivated) this.updateDemo(submittedForm);
    else {
      this.submitted = true;
      if(this.angForm.valid){
        this.AddDemo(submittedForm);
        this.formReset();
      }
    }
    this.isUpdateActivated = false;
    this.renderNewResult();
  } 
  addSnipField() { 
    let isOKtoAdd = true;
    for(let i=0;i<this.snips.value.length;i++) {
      if(this.snips.value[i]=='') isOKtoAdd = false;
    }
    if(isOKtoAdd) (<FormArray>this.snips).push(new FormControl('')); 
    else {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000,
        data: 'At least one of the snip field is empty, add disabled'
      });          
    }
  }

  deleteSnipField(index: number,event) {
    event.preventDefault();
    if (this.snips.length !== 1) { 
      this.snips.removeAt(index); 
    }
  }  
  addOutputField() { 
    let isOKtoAdd = true;
    for(let i=0;i<this.outputs.value.length;i++) {
      if(this.outputs.value[i]=='') isOKtoAdd = false;
    }
    if(isOKtoAdd) (<FormArray>this.outputs).push(new FormControl('')); 
    else {
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000,
        data: 'At least one of the output field is empty, add disabled'
      });          
    }
  }  
 
  deleteOutputField(index: number,event) {
    event.preventDefault();
    if (this.outputs.length !== 1) { 
      this.outputs.removeAt(index); 
    }
  }  
  renderNewResult(option?:any){
    let filterDemos = [...this.demos];
    if(option && option.value) {
      filterDemos = this.demos.filter(item => item.group.toUpperCase() == option.value);
      this.group = option.value;
    }
    else {
      filterDemos = this.demos.filter(item => item.group.toUpperCase() == this.group);
    }
    this.dataSource = new NestedMatTableDataSource<Demo>(filterDemos);
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

  }
}
