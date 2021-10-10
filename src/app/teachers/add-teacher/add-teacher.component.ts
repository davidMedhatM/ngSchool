import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { teacher } from 'src/app/models/teachers';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-add-teacher',
  templateUrl: './add-teacher.component.html',
  styleUrls: ['./add-teacher.component.css']
})
export class AddTeacherComponent{

  object = new teacher()
  constructor(private service: TeacherService, private router: Router) { }

  save(tName, tcourse){
    if(tName.error == null && tcourse.error == null){
      this.service.post(this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listT')
      })
    }else{
      alert("please enter valid data")
    }
  }
}
