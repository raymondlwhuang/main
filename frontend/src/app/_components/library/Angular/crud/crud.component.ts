import { Component, OnInit, ViewChild } from '@angular/core';
import { Observable } from 'rxjs';
import { Crud } from 'src/app/_models/crud';
import { CrudService } from 'src/app/_services/crud.service';
import { Store, select } from '@ngrx/store';
import { CrudState } from 'src/app/_store/state/crud.state';
import { getAllCruds } from 'src/app/_store/selectors/crud.selector';
import * as crudActionTypes from 'src/app/_store/actions/crud.action';
import { Update } from '@ngrx/entity';
import { NgForm }   from '@angular/forms';
import {v4 as uuid} from 'uuid';
import { NestedMatTableDataSource } from 'src/app/_helpers/nested-mat-table-data-source';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  cruds$ : Observable<Crud[]>;
  crudToBeUpdated : Crud;
  isUpdateActivated = false;
  isAddActivated = false;
  dataSource : any;
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;

  constructor(private crudService : CrudService, private store : Store<CrudState>) { }
  displayedColumns: string[] = ['name', 'description','operations'];

  ngOnInit() {
    this.cruds$ = this.store.pipe(select(getAllCruds));
    this.cruds$.subscribe(data=>{
      this.dataSource =  new NestedMatTableDataSource<Crud>(data);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    })

  }
  deleteCrud(payload:string) {
    this.store.dispatch(crudActionTypes.deleteCrud({payload}))
  }
  showUpdateForm(payload : Crud) {
    document.getElementById('data-table').style.display = 'none';
    this.crudToBeUpdated = {...payload};
    this.isUpdateActivated = true;
  }
  showAddForm() {
    document.getElementById('data-table').style.display = 'none';
    this.isAddActivated = true;
  }
  AddCrud(submittedForm: NgForm) {
    this.isAddActivated = false;
    document.getElementById('data-table').removeAttribute('style');
    if(submittedForm.invalid) {
      return;
    }
    const payload : Crud = {id: uuid(), name: submittedForm.value.name, description:submittedForm.value.description};
    this.store.dispatch(crudActionTypes.createCrud({payload}));  
  }  
  updateCrud(updateForm: NgForm){
    const payload: Update<Crud> = {
      id: this.crudToBeUpdated.id,
      changes: {
        ...this.crudToBeUpdated,
        ...updateForm.value
      }
    };

    this.store.dispatch(crudActionTypes.updateCrud({payload}));

    this.isUpdateActivated = false;
    this.crudToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }
  cancel(){
    this.isUpdateActivated = false;
    this.crudToBeUpdated = null;
    document.getElementById('data-table').removeAttribute('style');
  }
  showHide(){
    document.querySelectorAll("#show-hide div").forEach(ele=>ele.classList.toggle("hide"));
    document.querySelector('.unarchive').classList.toggle('turn');
}

}
