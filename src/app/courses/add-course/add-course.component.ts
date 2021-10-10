import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { course } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-add-course',
  templateUrl: 'add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent implements OnInit {

  object = new course()
  constructor(private service: CourseService, private router: Router) { }

  save(cName, cperiod){
    if(cName.error == null && cperiod.error == null){
      this.service.post(this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listC')
      })
    }else{
      alert("please enter valid data")
    }
  }
  ngOnInit(): void {
  }

}
