import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { UserComponent } from '../helpers/user/user.component';
import { UserListComponent } from '../helpers/user-list/user-list.component';
import { UserApplicationsComponent } from '../helpers/user-applications/user-applications.component';
/* 
declear component and exports them
than add DecoratorsModule to app.module
import FormsModule  if use ngModel
*/
@NgModule({
  declarations: [
    UserComponent,
    UserListComponent,
    UserApplicationsComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports:[
    UserComponent,
    UserListComponent,
    UserApplicationsComponent
  ]
})
export class DecoratorsModule { } 

