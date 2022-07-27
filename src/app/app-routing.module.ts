import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentComponent} from "./list-student/list-student.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";

const routes: Routes = [
  {
    path : 'list',
    component: ListStudentComponent
  }, {
    path : 'edit',
    component: EditStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
