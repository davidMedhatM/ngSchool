import { Component, OnInit } from '@angular/core';
import { CourseService } from 'src/app/shared/course.service';

@Component({
  selector: 'app-list-course',
  templateUrl: './list-course.component.html',
  styleUrls: ['./list-course.component.css']
})
export class ListCourseComponent implements OnInit {

  alldata:[];
  constructor(private service: CourseService) { 
    this.service.get().subscribe((data: any)=>{
     this.alldata = data
    })
  }

  remove(id){
    this.service.del(id).subscribe((data)=>{
      window.location.reload()
    })
  }

  ngOnInit(): void {
  }

}
