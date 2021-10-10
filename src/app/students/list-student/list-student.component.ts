import { Component, OnInit } from '@angular/core';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-list-student',
  templateUrl: './list-student.component.html',
  styleUrls: ['./list-student.component.css']
})
export class ListStudentComponent implements OnInit {

  alldata:[];
  constructor(private service: StudentService) { 
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
