import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/shared/branch.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.css']
})
export class AddBranchComponent implements OnInit {

  object = new branch()
  constructor(private service: BranchService, private router: Router) { }

  save(bname, tcourse){
    if(bname.error == null && tcourse.error == null){
      this.service.post(this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listB')
      })
    }else{
      alert("please enter valid data")
    }
  }

  ngOnInit(): void {
  }

}
