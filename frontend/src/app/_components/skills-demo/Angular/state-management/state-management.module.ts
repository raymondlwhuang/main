import { CourseEffects } from 'src/app/_store/effects/course.effect';
import { CourseService } from 'src/app/_services/course.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { StateManagementComponent } from '../state-management/state-management.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CourseReducer } from 'src/app/_store/reducers/course.reducer';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
//import { CreateCourseComponent } from './component/create-course/create-course.component';

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
