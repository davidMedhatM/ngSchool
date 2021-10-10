import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { course } from 'src/app/models/course';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent implements OnInit {

  id;
  object = new course();
  constructor( private service: CourseService,
     private router: Router,
     private active:ActivatedRoute
     ) {
      this.id = this.active.snapshot.paramMap.get('id');
      console.log(this.id)
      this.service.getbyid(this.id).subscribe((data: any)=>{
        this.object = data;
      })
   }

  change(cName, cperiod){

    if(cName.error == null && cperiod.error == null){
      this.service.update(this.id,this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listC')
      })
    }else{
      alert("please enter valid data")
    }
  }
  ngOnInit(): void {
  }

}
