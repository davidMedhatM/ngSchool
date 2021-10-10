import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { teacher } from 'src/app/models/teachers';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrls: ['./add-student.component.css']
})
export class AddStudentComponent implements OnInit {

  object = new teacher()
  constructor(private service: StudentService, private router: Router) { }

  save(sName, sLevel){
    if(sName.error == null && sLevel.error == null){
      this.service.post(this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listS')
      })
    }else{
      alert("please enter valid data")
    }
  }

  ngOnInit(): void {
  }

}
