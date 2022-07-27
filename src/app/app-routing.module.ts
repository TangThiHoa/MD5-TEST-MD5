import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ListStudentComponent} from "./list-student/list-student.component";
import {EditStudentComponent} from "./edit-student/edit-student.component";
import {DetailStudentComponent} from "./detail-student/detail-student.component";

const routes: Routes = [
  {
    path : '',
    component: ListStudentComponent
  }, {
    path : 'edit/:id',
    component: EditStudentComponent
  },
  {
    path : 'detail/:id',
    component: DetailStudentComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
