import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { teacher } from 'src/app/models/teachers';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-update-teacher',
  templateUrl: './update-teacher.component.html',
  styleUrls: ['./update-teacher.component.css']
})
export class UpdateTeacherComponent{

  id;
  object = new teacher();
  constructor( private service: TeacherService,
     private router: Router,
     private active:ActivatedRoute
     ) {
      this.id = this.active.snapshot.paramMap.get('id');
      console.log(this.id)
      this.service.getbyid(this.id).subscribe((data: any)=>{
        this.object = data;
      })
   }

  change(tName, tcourse){

    if(tName.error == null && tcourse.error == null){
      this.service.update(this.id,this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listT')
      })
    }else{
      alert("please enter valid data")
    }
  }

  
}
