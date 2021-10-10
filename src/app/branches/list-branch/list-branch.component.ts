import { Component, OnInit } from '@angular/core';
import { BranchService } from 'src/app/shared/branch.service';

@Component({
  selector: 'app-list-branch',
  templateUrl: './list-branch.component.html',
  styleUrls: ['./list-branch.component.css']
})
export class ListBranchComponent implements OnInit {

  alldata:[];
  constructor(private service: BranchService) { 
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
