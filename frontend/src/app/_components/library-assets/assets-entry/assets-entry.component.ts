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
//?????????
demos$ : Observable<Demo[]>;
demoToBeUpdated : Demo;
isUpdateActivated = false;
isAddActivated = false;
dataSource : any;
@ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
@ViewChild(MatSort, {static: true}) sort: MatSort;

//??????????
  name = new FormControl();
  title = 'angforms';
  submitted : boolean = false;
  angForm = new FormGroup({
    name : new FormControl('', Validators.required),
    group : new FormControl('', Validators.required),
    helpPath : new FormControl(''),
    snips: new FormArray([new FormControl('')]),
    outputs : new FormArray([this.addOutputFormGroup()]),
    indicator: new FormControl(0)
  }); 
  constructor(
    private _snackBar: MatSnackBar,
    private demoService : DemoService, 
    private store : Store<DemoState>
  ) {}
  //??????????????????????
  displayedColumns: string[] = ['name', 'description','operations'];
  ngOnInit() {
    this.demos$ = this.store.pipe(select(getAllDemos));
    this.demos$.subscribe(data=>{
      this.dataSource =  new NestedMatTableDataSource<Demo>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
      console.log(data);
    })

  }
  deleteDemo(payload:string) {
    this.store.dispatch(demoActionTypes.deleteDemo({payload}))
  }
  showUpdateForm(payload : Demo) {
    document.getElementById('data-table').style.display = 'none';
    this.demoToBeUpdated = {...payload};
    this.isUpdateActivated = true;
  }
  showAddForm() {
    document.getElementById('data-table').style.display = 'none';
    this.isAddActivated = true;
  }
  AddDemo(submittedForm: NgForm) {
    this.isAddActivated = false;
    document.getElementById('data-table').removeAttribute('style');
    if(submittedForm.invalid) {
      return;
    }
    const payload : Demo = {
      id: uuid(), 
      name: submittedForm.value.name, 
      group:submittedForm.value.group,
      snip:submittedForm.value.snip,
      output:submittedForm.value.output,
      helpPath:submittedForm.value.helpPath,
      indicator:submittedForm.value.indicator,
    };
    this.store.dispatch(demoActionTypes.createDemo({payload}));  
  }  
  updateDemo(updateForm: NgForm){
    const payload: Update<Demo> = {
      id: this.demoToBeUpdated.id,
      changes: {
        ...this.demoToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(demoActionTypes.updateDemo({payload}));

    this.isUpdateActivated = false;
    this.demoToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }
  cancel(){
    this.isUpdateActivated = false;
    this.demoToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }

  //??????????
  get snips(): FormArray {
    return this.angForm.get('snips') as FormArray;
  } 
  get outputs(): FormArray {
    return this.angForm.get('outputs') as FormArray;
  } 
  get formInput() {
    let test = this.angForm.controls;
    return this.angForm.controls;
  } 
  onFormSubmit(): void {
    // this.submitted = true;
    // if(this.angForm.valid){
    //   document.getElementById('output').innerHTML = JSON.stringify(this.angForm.value, undefined, 4);
    // }
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
  addOutputFormGroup() : FormGroup {
    let outputFormGroup =new FormGroup({
      output : new FormControl('')
    });
    return outputFormGroup;
  }  
  addOutput() {
    let isOKtoAdd = true;
    for(let i=0;i<this.outputs.length;i++) {
      if(this.outputs.value[i].output=='') isOKtoAdd = false;
    }
    if(isOKtoAdd) (<FormArray>this.outputs).push(this.addOutputFormGroup());
    else{
      this._snackBar.openFromComponent(SnackBarComponent, {
        duration: 5000,
        data: 'At least one of the output field is empty, add disabled'
      });
    } 
  }

  deleteOutput(index: number,event) {
    event.preventDefault();
    if (this.outputs.length !== 1) { 
      this.outputs.removeAt(index); 
    }
  }  

}
