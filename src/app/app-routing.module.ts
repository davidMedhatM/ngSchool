import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';
import { ListBranchComponent } from './branches/list-branch/list-branch.component';
import { UpdateBranchComponent } from './branches/update-branch/update-branch.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { ListStudentComponent } from './students/list-student/list-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { ListTeacherComponent } from './teachers/list-teacher/list-teacher.component';
import { UpdateTeacherComponent } from './teachers/update-teacher/update-teacher.component';


const routes: Routes = [
  {path: "home", component : HomeComponent},
  {path: "", component : HomeComponent},
  {path: "addT" , component : AddTeacherComponent},
  {path: "updateT/:id", component: UpdateTeacherComponent},
  {path: "listT", component : ListTeacherComponent},
  {path: "addS" , component : AddStudentComponent},
  {path: "updateS/:id", component: UpdateStudentComponent},
  {path: "listS", component : ListStudentComponent},
  {path: "addB" , component : AddBranchComponent},
  {path: "updateB/:id", component: UpdateBranchComponent},
  {path: "listB", component : ListBranchComponent},
  {path: "addC" , component : AddCourseComponent},
  {path: "updateC/:id", component: UpdateCourseComponent},
  {path: "listC", component : ListCourseComponent},
  {path: "**", component : NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
