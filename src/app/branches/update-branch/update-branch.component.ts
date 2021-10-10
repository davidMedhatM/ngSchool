import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { branch } from 'src/app/models/branch';
import { BranchService } from 'src/app/shared/branch.service';

@Component({
  selector: 'app-update-branch',
  templateUrl: './update-branch.component.html',
  styleUrls: ['./update-branch.component.css']
})
export class UpdateBranchComponent implements OnInit {

  id;
  object = new branch();
  constructor( private service: BranchService,
     private router: Router,
     private active:ActivatedRoute
     ) {
      this.id = this.active.snapshot.paramMap.get('id');
      console.log(this.id)
      this.service.getbyid(this.id).subscribe((data: any)=>{
        this.object = data;
      })
   }

  change(bname, bplace){

    if(bname.error == null && bplace.error == null){
      this.service.update(this.id,this.object).subscribe((data)=>{
        this.router.navigateByUrl('/listB')
      })
    }else{
      alert("please enter valid data")
    }
  }

  ngOnInit(): void {
  }

}
