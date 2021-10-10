import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { student } from 'src/app/models/student';
import { StudentService } from 'src/app/shared/student.service';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrls: ['./update-student.component.css']
})
export class UpdateStudentComponent implements OnInit {

  id;
  object = new student();
  constructor( private service: StudentService,
     private router: Router,
     private active:ActivatedRoute
     ) {
      this.id = this.active.snapshot.paramMap.get('id');
      console.log(this.id)
      this.service.getbyid(this.id).subscribe((data: any)=>{
        this.object = data;
      })
   }

  change(sName, sLevel){

    if(sName.error == null && sLevel.error == null){
      this.service.update(this.id,this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listS')
      })
    }else{
      alert("please enter valid data")
    }
  }

  ngOnInit(): void {
  }

}
