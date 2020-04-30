import { CrudEffects } from 'src/app/_store/effects/crud.effect';
import { CrudService } from 'src/app/_services/crud.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StateManagementComponent } from './state-management.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CrudReducer } from 'src/app/_store/reducers/crud.reducer';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { CreateCrudComponent } from './component/create-crud/create-crud.component';

@NgModule({
  declarations: [StateManagementComponent],
  imports: [
    CommonModule,
    FormsModule,
    MatIconModule,
    MatTableModule,
    MatPaginatorModule
  ],
  exports: [StateManagementComponent]
})
export class StateManagementModule { }
