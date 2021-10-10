import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ListTeacherComponent } from './teachers/list-teacher/list-teacher.component';
import { AddTeacherComponent } from './teachers/add-teacher/add-teacher.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { UpdateTeacherComponent } from './teachers/update-teacher/update-teacher.component';
import { AddStudentComponent } from './students/add-student/add-student.component';
import { ListStudentComponent } from './students/list-student/list-student.component';
import { UpdateStudentComponent } from './students/update-student/update-student.component';
import { AddBranchComponent } from './branches/add-branch/add-branch.component';
import { ListBranchComponent } from './branches/list-branch/list-branch.component';
import { UpdateBranchComponent } from './branches/update-branch/update-branch.component';
import { AddCourseComponent } from './courses/add-course/add-course.component';
import { UpdateCourseComponent } from './courses/update-course/update-course.component';
import { ListCourseComponent } from './courses/list-course/list-course.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ListTeacherComponent,
    AddTeacherComponent,
    NotFoundComponent,
    UpdateTeacherComponent,
    AddStudentComponent,
    ListStudentComponent,
    UpdateStudentComponent,
    AddBranchComponent,
    ListBranchComponent,
    UpdateBranchComponent,
    AddCourseComponent,
    UpdateCourseComponent,
    ListCourseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
