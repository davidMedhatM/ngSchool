import { Component, OnInit } from '@angular/core';
import { ApifunctionsService } from 'src/app/shared/apifunctions.service';
import { TeacherService } from 'src/app/shared/teacher.service';

@Component({
  selector: 'app-list-teacher',
  templateUrl: './list-teacher.component.html',
  styleUrls: ['./list-teacher.component.css']
})
export class ListTeacherComponent{
  alldata:[];
  constructor(private service: TeacherService) { 
    this.service.get().subscribe((data: any)=>{
     this.alldata = data
    })
  }

  remove(id){
    this.service.del(id).subscribe((data)=>{
      window.location.reload()
    })
  }
}
